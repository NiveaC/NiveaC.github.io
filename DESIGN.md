---
version: "1.0"
name: "Nivea Chen Portfolio"
description: "Editorial × Product Strategy × Premium Minimal"

colors:
  primary: "#DEDAD0"
  secondary: "#F2EFE6"
  accent: "#111944"
  text-primary: "#1D1D1D"
  text-secondary: "#666666"
  border: "#E5E2DA"
  white: "#FFFFFF"
  success: "#497A5A"
  warning: "#D89B3D"
  soft-blue: "#DCE4F8"
  soft-beige: "#F8F6F1"

typography:
  heading-font: "Inter"
  heading-fallback: "system-ui, -apple-system, sans-serif"
  body-font: "Noto Sans TC"
  body-fallback: "PingFang TC, Microsoft JhengHei, sans-serif"
  scale:
    display: { size: "72px", weight: 500, lineHeight: "110%", letterSpacing: "-0.03em" }
    h1:      { size: "56px", weight: 500, lineHeight: "120%" }
    h2:      { size: "48px", weight: 500, lineHeight: "120%" }
    h3:      { size: "32px", weight: 500, lineHeight: "130%" }
    body-lg: { size: "20px", weight: 400, lineHeight: "180%" }
    body:    { size: "18px", weight: 400, lineHeight: "170%" }
    small:   { size: "16px", weight: 400, lineHeight: "160%" }
    caption: { size: "14px", weight: 500, letterSpacing: "0.08em", transform: "uppercase" }

spacing:
  xs:  "8px"
  sm:  "16px"
  md:  "24px"
  lg:  "48px"
  xl:  "80px"
  2xl: "120px"
  3xl: "160px"

rounded:
  sm:  "12px"
  md:  "20px"
  lg:  "32px"
  xl:  "48px"

shadows:
  soft:  "0 10px 30px rgba(0,0,0,0.05)"
  hover: "0 20px 40px rgba(0,0,0,0.08)"

motion:
  fade-up:
    from: "opacity:0; transform:translateY(30px)"
    to:   "opacity:1; transform:translateY(0)"
    duration: "600ms"
  card-hover:
    transform: "translateY(-8px)"
    duration: "350ms"
  image-hover:
    transform: "scale(1.03)"
    duration: "350ms"
---

# Nivea Chen Portfolio — Design System

## Style Direction
Editorial × Product Strategy × Premium Minimal

Reference: Kat Wang Portfolio

---

## Design Principles

- 商業思維 (Business Thinking)
- 系統思維 (Systems Thinking)
- 用戶價值 (User Value)
- 優雅簡潔 (Elegant Minimalism)

設計目標：將複雜資訊轉化為清晰、有說服力的故事。

---

## Brand Personality

**Keywords:** Strategic · Elegant · Insightful · Calm · Thoughtful · Human-centered

**Tone:**
- Professional but approachable
- Data-informed but human
- Confident but humble

---

## Color System

| Token | Hex | 用途 |
|---|---|---|
| Primary | `#DEDAD0` | Hero Background, Featured Section, Highlight Surface |
| Secondary | `#F2EFE6` | Page Background, Alternate Sections |
| Accent | `#111944` | CTA, Navigation Active State, Highlights |
| Text Primary | `#1D1D1D` | Main body text |
| Text Secondary | `#666666` | Supporting text, metadata |
| Border | `#E5E2DA` | All borders and dividers |
| White | `#FFFFFF` | Cards, panels |
| Success | `#497A5A` | Positive states |
| Warning | `#D89B3D` | Caution states |
| Soft Blue | `#DCE4F8` | Tag backgrounds, dim highlights |
| Soft Beige | `#F8F6F1` | Alternate subtle backgrounds |

---

## Typography

### Fonts
- **Heading / 西文:** `Inter`, system-ui, -apple-system, sans-serif — 標題、導覽、按鈕、數字
- **Body / 中文:** `Noto Sans TC`, PingFang TC, Microsoft JhengHei, sans-serif — 內文、說明文字

### Scale

| Level | Size | Weight | Line Height | Notes |
|---|---|---|---|---|
| Display | 72px | 500 | 110% | Letter spacing -0.03em |
| H1 | 56px | 500 | 120% | |
| H2 | 48px | 500 | 120% | |
| H3 | 32px | 500 | 130% | |
| Body Large | 20px | 400 | 180% | |
| Body | 18px | 400 | 170% | |
| Small | 16px | 400 | 160% | |
| Caption | 14px | 500 | — | Uppercase, LS 0.08em |

---

## Layout System

- Container Max Width: 1280px · Horizontal Padding: 48px
- Content Width (long-form): 720px
- Desktop Grid: 12 columns · Gap 24px
- Tablet Grid: 8 columns · Gap 20px
- Mobile Grid: 4 columns · Gap 16px

---

## Spacing System

| Token | Value |
|---|---|
| XS | 8px |
| SM | 16px |
| MD | 24px |
| LG | 48px |
| XL | 80px |
| 2XL | 120px |
| 3XL | 160px |

---

## Radius System

| Token | Value |
|---|---|
| Small | 12px |
| Medium | 20px |
| Large | 32px |
| XL | 48px |

---

## Shadow System

- Soft: `0 10px 30px rgba(0,0,0,0.05)`
- Hover: `0 20px 40px rgba(0,0,0,0.08)`

---

## Motion System

Principle: 動畫僅作為輔助，不作為視覺主角。

- **Fade Up** — `opacity:0 + translateY(30px)` → `opacity:1 + translateY(0)` · 600ms
- **Card Hover** — `translateY(-8px)` · 350ms ease
- **Image Hover** — `scale(1.03)` · 350ms ease

---

## Component Guidelines

### Navigation
Height: 88px · Sticky · Blur background · Minimal items (Work / About / Resume / Contact)

### Hero Section
Height: 90vh · Structure: Eyebrow → Headline → Description → CTA

### Portfolio Card
White background · Radius 32px · Soft shadow · Hover: translateY(-8px)

### Buttons
- Primary: Background `#111944` · Text White · Radius 999px
- Secondary: Transparent · Border `1px solid #111944` · Text `#111944`

---

## Imagery Guidelines

**Use:** Product Screenshots · User Journey Maps · Service Blueprints · Research Artifacts · Flow Diagrams · Data Visualizations

**Avoid:** Generic Stock Photos · AI Illustration · Abstract 3D Graphics · Decorative Images

---

## Case Study Visual Structure

1. Overview → 2. Business Context → 3. Problem → 4. Research
5. Insights → 6. Strategy → 7. Solution → 8. Impact → 9. Reflection

---

## Accessibility

- Min Contrast Ratio: 4.5:1
- Min Touch Target: 44px
- Body Text: 18px minimum
- Focus States: visible on all interactive elements

---

## Design Rules

**Do:** Generous whitespace · Prioritize readability · Show business impact · Tell a story · Calm structured layouts · Typography as visual hierarchy

**Don't:** Excessive gradients · Glassmorphism · Over-animation · Dashboard-heavy layouts · Overcrowding · More than 3 primary colors
