# Yeshwanth Soma — Portfolio

Personal portfolio website inspired by [brittanychiang.com](https://brittanychiang.com).

## Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (available for animations)
- **Lucide React** (icons)

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, Inter font, metadata
│   ├── page.tsx          # Entry point → PortfolioLayout
│   └── globals.css       # Design tokens, custom utilities
├── components/
│   ├── PortfolioLayout   # Two-column layout, section observer
│   ├── LeftPanel         # Fixed sidebar: name, nav, socials
│   ├── SpotlightCursor   # Mouse radial glow effect
│   ├── AboutSection
│   ├── ExperienceSection
│   ├── ProjectsSection
│   └── SkillsSection
└── data/
    └── resume.ts         # All content — edit here to update site
```

## Development

```bash
cd portfolio
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve production build
```

## Updating content

All resume content lives in `data/resume.ts`. Edit that file to update any section — no component changes needed.

## Design tokens (globals.css)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0a192f` | Page background |
| `--accent` | `#64ffda` | Teal highlights, tags |
| `--text-primary` | `#ccd6f6` | Headings |
| `--text-secondary` | `#8892b0` | Body text |
| `--text-muted` | `#495670` | Timestamps, labels |
