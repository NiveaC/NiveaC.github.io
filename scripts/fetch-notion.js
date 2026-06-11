#!/usr/bin/env node
/**
 * fetch-notion.js
 * 從 Notion 資料庫抓取案例內容，寫入 data/cases.json
 *
 * 環境變數：
 *   NOTION_TOKEN      — Notion Integration Token
 *   NOTION_DB_ID      — Notion Database ID（從資料庫 URL 取得）
 *
 * 執行：node scripts/fetch-notion.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.NOTION_TOKEN;
const DB_ID = process.env.NOTION_DB_ID;

if (!TOKEN || !DB_ID) {
  console.error('缺少環境變數：NOTION_TOKEN 或 NOTION_DB_ID');
  process.exit(1);
}

function notionRequest(endpoint, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'api.notion.com',
      path: `/v1/${endpoint}`,
      method: body ? 'POST' : 'GET',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        ...(data && { 'Content-Length': Buffer.byteLength(data) }),
      },
    };

    const req = https.request(options, (res) => {
      let raw = '';
      res.on('data', (chunk) => raw += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch (e) { reject(e); }
      });
    });

    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

function getText(prop) {
  if (!prop) return '';
  if (prop.type === 'title') return prop.title.map(t => t.plain_text).join('');
  if (prop.type === 'rich_text') return prop.rich_text.map(t => t.plain_text).join('');
  if (prop.type === 'url') return prop.url || '';
  if (prop.type === 'number') return prop.number ?? '';
  if (prop.type === 'checkbox') return prop.checkbox;
  if (prop.type === 'select') return prop.select?.name || '';
  return '';
}

async function fetchAllPages(databaseId) {
  const results = [];
  let cursor = undefined;

  do {
    const body = {
      sorts: [{ property: 'order', direction: 'ascending' }],
      ...(cursor && { start_cursor: cursor }),
    };
    const res = await notionRequest(`databases/${databaseId}/query`, body);
    results.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  return results;
}

async function main() {
  console.log('從 Notion 抓取資料...');

  const pages = await fetchAllPages(DB_ID);
  console.log(`取得 ${pages.length} 筆資料`);

  const cases = pages
    .map(page => {
      const p = page.properties;
      return {
        order:         Number(getText(p.order))   || 99,
        number:        String(getText(p.number) || '').padStart(2, '0'),
        tag:           getText(p.tag),
        title:         getText(p.title),
        description:   getText(p.description),
        role:          getText(p.role),
        platform:      getText(p.platform),
        year:          getText(p.year),
        insight_label: getText(p.insight_label),
        insight:       getText(p.insight),
        link:          getText(p.link),
        published:     getText(p.published),
      };
    })
    .filter(c => c.published === true)
    .sort((a, b) => a.order - b.order);

  const outPath = path.join(__dirname, '..', 'data', 'cases.json');
  fs.writeFileSync(outPath, JSON.stringify(cases, null, 2), 'utf8');
  console.log(`寫入 ${outPath}（${cases.length} 筆已發佈案例）`);
}

main().catch(err => {
  console.error('發生錯誤：', err);
  process.exit(1);
});
