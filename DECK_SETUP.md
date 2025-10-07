# Vulk Presentation - One-Pager & Deck Views

This project now supports two viewing formats for the same content:

## 🎯 Features

- **Single Source of Truth**: All content is centralized in [`src/polymet/data/vulk-content.ts`](src/polymet/data/vulk-content.ts)
- **Two View Formats**:
  - **One-Pager**: Traditional scrolling website format (default)
  - **Deck**: Full-screen slide presentation format
- **Seamless Switching**: Toggle between formats with a single click
- **Shared Components**: Both views use the same React components with data props

## 🚀 Usage

### Running the Application

```bash
npm install
npm run dev
```

### Accessing Views

- **One-Pager**: http://localhost:5173/
- **Deck**: http://localhost:5173/deck

### Switching Between Views

Click the floating button in the top-right corner:
- Shows "Deck" icon when in one-pager view
- Shows "One-Pager" icon when in deck view

## 📝 Updating Content

All content is managed in a single file: [`src/polymet/data/vulk-content.ts`](src/polymet/data/vulk-content.ts)

Edit this file to update content across **both** views simultaneously.

### Content Structure

```typescript
export const vulkContent = {
  hero: { /* Hero section data */ },
  problem: { /* Problem section data */ },
  solution: { /* Solution section data */ },
  market: { /* Market section data */ },
  team: { /* Team section data */ },
  roadmap: { /* Roadmap section data */ },
  fundraising: { /* Fundraising section data */ }
}
```

## 🎨 Deck Controls

When in deck view:
- **Navigate**: Arrow keys, mouse wheel, or click navigation arrows
- **Keyboard Shortcuts**: ← → ↑ ↓ to navigate slides
- **Slide Counter**: Bottom-left corner shows current slide number

## 🏗️ Architecture

```
src/polymet/
├── data/
│   └── vulk-content.ts          # Centralized content data
├── components/
│   ├── vulk-hero-section.tsx
│   ├── vulk-problem-section.tsx
│   ├── vulk-solution-section.tsx
│   ├── vulk-market-section.tsx
│   ├── vulk-team-section.tsx
│   ├── vulk-roadmap-section.tsx
│   ├── vulk-fundraising-section.tsx
│   └── view-switcher.tsx        # Toggle button component
└── pages/
    ├── vulk-one-pager.tsx       # Scrolling layout
    └── vulk-deck.tsx            # Slide-based layout
```

## 🔧 Technical Details

- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Slides**: Swiper.js
- **Icons**: Lucide React

## 💡 Benefits

1. **Content Consistency**: Change content once, update both views
2. **Easy Maintenance**: All content in one file
3. **Flexible Presentation**: Choose format based on audience/context
4. **Professional Options**: Scroll for details, present for pitch meetings
