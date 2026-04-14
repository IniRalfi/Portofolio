# 🧱 Web Architecture – Minimalist Editorial Doodle Style

## 🎯 Project Direction

A modern minimalist website with:

- Strong editorial typography
- Handwritten (script) accent
- Doodle-style illustrations (imperfect, human feel)
- Monochrome soft contrast palette

---

## ⚙️ Tech Stack

### Core

- **Runtime:** Bun
- **Framework:** Next.js (App Router)
- **Language:** TypeScript

### Styling

- **Tailwind CSS** → utility-first styling
- **CVA (class-variance-authority)** → component variants
- **clsx** → conditional class handling

### Animation & Interaction

- **Framer Motion** → UI animations
- **Lenis** → smooth scrolling

### Typography

- **next/font** → optimized font loading
- Sans-serif (primary readability)
- Script / Handwritten (accent only)

### Theme

- **next-themes** → theme handling (optional future-proofing)

---

## 🎨 Design System

### Color Palette

- Primary: `#111111`
- Secondary: `#1A1A1A`
- Text: `#2B2B2B`
- Background: `#F5F5F5` / `#FAFAFA`

### Typography Rules

- Sans-serif → body, navigation, layout
- Script (Amsterdam) → highlights only
- Avoid long text in script font

### Layout Principles

- 80% whitespace & structure
- 15% typography play
- 5% doodle accents

---

## ✏️ Illustration & Icon Strategy

### Base Icons

- Lucide / Phosphor (for functional UI)

### Doodle Style (Important)

- Custom SVG illustrations
- Imperfect lines (hand-drawn feel)
- Stroke: ~1–2px
- Black or slightly soft black

### Sources (if needed)

- Figma Community
- Free SVG libraries (then tweak manually)

---

## 🧩 Folder Structure (Recommended)

```
/app
/components
  /ui
  /layout
  /sections
/lib
/hooks
/styles
/assets
  /icons
  /illustrations
```

---

## 🧠 Component Strategy

### Keep Components:

- Small
- Reusable
- Variant-driven (via CVA)

### Example:

- Button (primary / ghost / outline)
- Section wrapper
- Typography components

---

## 🎬 Animation Guidelines

- Subtle > flashy
- Use motion for:
  - Entrance (fade + slight translate)
  - Hover interactions
  - Scroll reveals

Avoid:

- Over-animation
- Delays that hurt UX

---

## 🚀 Development Principles

- Consistency > creativity chaos
- Limit font usage (max 2–3)
- Avoid overusing doodles
- Prioritize readability

---

## 🔥 Future Enhancements (Optional)

- Dark mode refinement
- Micro-interactions
- CMS integration (if needed)

---
