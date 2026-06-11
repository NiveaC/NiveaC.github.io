# Nivea Portfolio Website — 開發參考文件

## 專案概覽

Nivea 的個人作品集網站，定位為 Product Manager & Systems Thinker。
純靜態網站，無框架、無建置工具，直接開啟 `index.html` 即可運行。

---

## 檔案結構

```
Nivea_website/
├── index.html              # 主頁（單頁式，含 6 個 section）
├── css/
│   ├── style.css           # 主樣式（首頁專用）
│   └── case-study.css      # 案例頁共用樣式
├── js/
│   └── script.js           # 全域互動行為
├── cases/
│   ├── mo-points.html      # 案例 01：mo 點金流系統
│   ├── instacare.html      # 案例 02：InstaCare UX 研究
│   └── live-show-seller.html  # 案例 03：Live Show Seller 優化
└── assets/
    └── images/
        ├── instacare/      # InstaCare 案例圖片
        └── lss/            # Live Show Seller 案例圖片
    └── resume/             # 履歷 PDF（resume.pdf）
```

---

## Design Tokens（CSS 變數）

定義在 `style.css` 的 `:root`，開發時一律使用變數，**不要 hardcode 色碼或數值**。

---

### 顏色

```css
:root {
  /* 背景與基底 */
  --bg-main: #F9F8F3;         /* 全域冷米色大背景 */
  --bg-card: #FFFFFF;         /* 純白卡片/面板背景 */

  /* 品牌與文字 */
  --color-primary: #002045;   /* 核心深海藍（大標題、主要按鈕、重度強調） */
  --text-main: #002045;       /* 主文字（等同核心深海藍，確保系統一致性） */
  --text-muted: #525875;      /* 副標題、內文、說明文字（鋼鐵灰藍） */

  /* 功能與互動跳色 */
  --color-accent: #002045;    /* 深海藍（主品牌色：按鈕、強調、指標） */
  --color-sub: #1a437a;       /* 輔助藍（Hover、連結、active 狀態） */
  --color-accent-dim: #E6EDF8;/* 極淡深海藍（標籤背景、輕度高亮） */

  /* 系統格線與狀態 */
  --border-sys: #E2E5F0;      /* 系統感細邊框、格線（冰河灰藍） */
  --success: #10B981;         /* 線上/可接案狀態綠燈 */
}
```

| 變數 | 值 | 用途 |
|---|---|---|
| `--bg-main` | `#F9F8F3` | 全域背景（冷米色）|
| `--bg-card` | `#FFFFFF` | 卡片、面板背景 |
| `--color-primary` | `#002045` | 大標題、主要按鈕、重度強調 |
| `--text-main` | `#002045` | 主文字 |
| `--text-muted` | `#525875` | 副標題、內文、說明文字 |
| `--color-accent` | `#002045` | 主品牌色：按鈕、強調、指標 |
| `--color-sub` | `#1a437a` | 輔助藍：hover、連結、active 狀態 |
| `--color-accent-dim` | `#E6EDF8` | 標籤背景、輕度高亮 |
| `--border-sys` | `#E2E5F0` | 所有邊框、格線 |
| `--success` | `#10B981` | 線上 / 可接案狀態燈 |

---

### 間距

```css
:root {
  --space-xs:  0.25rem; /* 4px  — 極微小調整 */
  --space-sm:  0.5rem;  /* 8px  — 標籤內襯 */
  --space-md:  1rem;    /* 16px — 元件內置間距、段落間距 */
  --space-lg:  1.5rem;  /* 24px — 卡片內襯、一般元素間距 */
  --space-xl:  2rem;    /* 32px — Bento Grid 卡片間 gap */
  --space-2xl: 4rem;    /* 64px — Section 上下留白 */
  --space-3xl: 6rem;    /* 96px — Hero 與大區塊高階留白 */
}
```

---

### 字體

```
字型堆疊：'Plus Jakarta Sans', Inter, 'Noto Sans TC', sans-serif
```

| CSS 變數 | 大小 | Weight | Line Height | 適用場景 |
|---|---|---|---|---|
| `--fs-h1` | 3rem (48px) | 700 | 1.2 | 頁面最主標題（Hero 大名）|
| `--fs-h2` | 2rem (32px) | 600 | 1.3 | 區塊主標題（作品集、關於我）|
| `--fs-h3` | 1.5rem (24px) | 600 | 1.4 | 卡片/專案大標題（`.case-title`）|
| `--fs-sub` | 1.125rem (18px) | 500 | 1.5 | 副標題/資訊欄小標（timeline-role、service h3）|
| `--fs-body` | 1rem (16px) | 400 | 1.6 | 全站標準內文/敘述 |
| `--fs-meta` | 0.875rem (14px) | 500 | 1.4 | 標籤、時間軸、附註、代碼（letter-spacing: 0.05em）|

Hero heading 與 section-title 保留 `clamp()` 以維持 RWD，上限鎖定對應 token：
- `.hero-heading`：`clamp(1.8rem, 4vw, var(--fs-h1))`
- `.section-title`：`clamp(1.4rem, 3vw, var(--fs-h2))`

---

### 圓角

| Token | 值 | 用途 |
|---|---|---|
| `sys-sm` | `8px` | 按鈕、標籤、小元件 |
| `sys-card` | `16px` | 卡片、面板、大容器 |

---

### Tailwind 對應（設計規範參考）

```js
// tailwind.config.js
colors: {
  tech: {
    bg:          '#F9F8F3',  // --bg-main
    card:        '#FFFFFF',  // --bg-card
    blue:        '#002045',  // --color-primary / --text-main / --color-accent
    sub:         '#1a437a',  // --color-sub (hover / active)
    muted:       '#525875',  // --text-muted
    accentDim:   '#E6EDF8',  // --color-accent-dim
    border:      '#E2E5F0',  // --border-sys
    success:     '#10B981',  // --success
  }
}
spacing: {
  'sys-xs': '4px', 'sys-sm': '8px', 'sys-md': '16px',
  'sys-lg': '24px', 'sys-xl': '32px', 'sys-2xl': '64px', 'sys-3xl': '96px',
}
```

---

## 版面架構（首頁）

Left sidebar（固定）+ Right main content（scroll）的雙欄架構。

```
[Sidebar 280px fixed] | [Main content scrollable]
```

### Sidebar 包含
- Brand name + title
- Nav links（scroll spy 自動 active）
- 中/英語言切換（`lang-zh` / `lang-en`）
- Social links（LinkedIn、GitHub、Email）— 目前為 placeholder
- 履歷下載按鈕

### Main Content — Section 順序

| ID | 標籤 | 內容 |
|---|---|---|
| `#home` | `00` | Hero：標題、副標、數字指標 |
| `#about` | `01 · 關於我` | 照片 + 介紹文 + 標籤 |
| `#work` | `02 · 精選案例` | 3 個案例卡片 |
| `#experience` | `03 · 經歷` | Timeline：工作經歷 + 學歷 |
| `#expertise` | `04 · 專長` | 4 個專長卡片 |
| `#services` | `05 · 服務` | 3 種接案服務 |
| `#contact` | `06 · 聯絡` | 聯絡資訊 + 表單 |

交替 section 用 `.section-alt`（背景色 `--bg-alt`）。

---

## 語言切換機制

- HTML 結構：同一元素內同時存在 `<span class="lang-zh">` 和 `<span class="lang-en">`
- 預設顯示中文；切換英文時 body 加上 `.use-en`
- CSS 控制顯示：`body.use-en .lang-en { display: inline; } body.use-en .lang-zh { display: none; }`
- 語言偏好存入 `localStorage('portfolio-lang')`
- **新增文案時，中英兩個 span 都必須填寫**

---

## JavaScript 行為（script.js）

| 功能 | 說明 |
|---|---|
| Scroll reveal | `.reveal` 元素進入視窗時加 `.visible`，觸發 CSS 動畫（opacity + translateY）|
| Scroll spy | 用 `IntersectionObserver` 偵測當前 section，自動更新 nav active 狀態 |
| Mobile sidebar | 漢堡按鈕 toggle `.open`，點 nav link 自動關閉 |
| 語言切換 | `btnZh` / `btnEn` 切換 body class，存 localStorage |
| Contact form | 送出後顯示成功訊息 3 秒後 reset（目前無後端，純前端模擬）|

---

## 元件 Class 規範

### Section Header
```html
<div class="section-header reveal">
  <span class="section-label">XX · 名稱</span>
  <h2 class="section-title">...</h2>
  <p class="section-desc reveal">...</p>  <!-- 可選 -->
</div>
```

### 案例卡片（case-card）
```html
<div class="case-card reveal">
  <div class="case-meta">
    <span class="case-number">01</span>
    <span class="case-tag">分類 · 標籤</span>
  </div>
  <h3 class="case-title">標題</h3>
  <p class="case-desc">描述</p>
  <div class="case-details">
    <span class="case-detail">Role: ...</span>
    <span class="case-detail">Platform: ...</span>
    <span class="case-detail">年份</span>
  </div>
  <div class="case-insight">
    <span class="insight-label">Key Decision / Key Insight</span>
    <span class="insight-text">關鍵洞察或決策摘要</span>
  </div>
  <a href="cases/xxx.html" class="case-link">...</a>
</div>
```

### Timeline 項目
```html
<div class="timeline-row reveal">
  <div class="timeline-year">2023 — Now</div>
  <div class="timeline-body">
    <h3 class="timeline-role">職位名稱</h3>
    <p class="timeline-org">公司名稱</p>
    <p class="timeline-desc">描述</p>
  </div>
</div>
```

### Scroll Reveal
所有需要進場動畫的元素加 `.reveal`。JS 用 IntersectionObserver 加 `.visible` 觸發動畫。

---

## 案例頁（cases/*.html）

使用 `case-study.css`，結構為固定 top nav + 單欄內容。

- `case-nav`：上方固定導覽（返回連結 + 案例標題）
- `case-main`：最大寬 1000px，水平置中，padding 96px 上方
- `case-layout`：兩欄 grid（160px sidebar + 1fr content）
- Sidebar 為 sticky，top: 76px

目前有圖片的案例：
- `instacare/`：cover、overview、process、quant-1/2、recruit、key-finding-1/2/3、solutions、takeaway、value-canvas
- `lss/`：cover、overview、project-overview、problems、cjm、user-flow、ia-before-after、create-activity、manage-order、campaign-live、iteration、design-process、results、page-01

`mo-points.html` 目前尚無對應圖片資料夾。

---

## 待填寫的 Placeholder（未完成內容）

| 位置 | 待補 |
|---|---|
| Sidebar social links | LinkedIn、GitHub 真實 URL |
| Sidebar email | 真實 email（目前為 `your@email.com`）|
| About section | 本人照片（目前為佔位框）|
| Experience section | 三筆工作 / 學歷的真實內容 |
| Contact section | 真實 email、LinkedIn URL |
| Hero metrics | 確認 5+ 年、3+ SaaS 是否正確 |
| `assets/resume/resume.pdf` | 確認履歷檔案是否存在 |

---

## RWD 斷點

| 斷點 | 行為 |
|---|---|
| `≤ 900px` | sidebar 縮為 240px；about grid 調整欄寬；contact 改單欄 |
| `≤ 768px` | sidebar 隱藏（slide-in），顯示 mobile header；section padding 縮小；timeline/service 改單欄 |

---

## 開發注意事項

1. **不使用框架**：純 HTML / CSS / JS，不引入任何第三方庫。
2. **設計語言**：專業、沉穩、系統感強。色調冷米白底（`--bg-main`）搭配深海藍主色（`--color-primary: #002045`），輔助色為中深藍（`--color-sub: #1a437a`）用於 hover 與互動狀態。避免過度裝飾，邊框一律用 `--border-sys`。
3. **新增 section 或元件**：沿用現有 CSS 變數與 class 命名模式，不另開新的命名系統。
4. **語言**：所有使用者可見文字都必須同時提供中英版本（`lang-zh` + `lang-en`）。
5. **動畫**：需要進場動畫的元素加 `.reveal`，無需另外寫 JS。
6. **案例頁樣式**：案例頁引用 `../css/case-study.css`，若需要額外樣式寫在同一檔案尾端，不要為單一案例新增獨立 CSS 檔。
