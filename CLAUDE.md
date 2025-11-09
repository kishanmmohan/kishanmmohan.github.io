# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages personal portfolio website hosted at kishanmmohan.dev. Built with Nuxt 3, Vue 3, and shadcn-vue components, it showcases the professional profile of Kishan M Mohan, a Lead Data Engineer at CrowdANALYTIX.

## Tech Stack

- **Framework**: Nuxt 4.2.1 with Vue 3
- **Styling**: Tailwind CSS 3.x with custom CSS variables
- **UI Components**: shadcn-vue (based on Radix Vue)
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
├── app/
│   ├── app.vue              # Main application component (landing page)
│   ├── components/
│   │   └── ui/              # shadcn-vue components (Button, Card, etc.)
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css # Tailwind base styles + CSS variables
│   └── lib/
│       └── utils.ts         # Utility functions (cn helper)
├── public/
│   └── CNAME                # Custom domain configuration
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── components.json          # shadcn-vue configuration
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Project dependencies

```

## Development Commands

### Local Development
```bash
# Install dependencies
pnpm install

# Start development server (with hot reload)
pnpm run dev
# Server runs at http://localhost:3000
```

### Building for Production
```bash
# Generate static site
pnpm run generate
# Output: .output/public/

# Preview production build locally
pnpm run preview
```

### Adding shadcn-vue Components
```bash
# Add a new component (e.g., badge)
pnpm dlx shadcn-vue@latest add badge

# Components are added to app/components/ui/
```

## Deployment

The site is deployed to GitHub Pages manually:
1. Run `pnpm run generate` to build the static site
2. The output is generated in `.output/public/`
3. Commit and push the repository to the `main` branch
4. GitHub Pages will serve the static files from the repository

## Key Configuration

### Static Site Generation
The site uses Nuxt's static site generation (SSG) mode configured in `nuxt.config.ts`:
- `ssr: true` for proper SSG
- Static files are generated to `.output/public/`

### GitHub Pages
- Custom domain: kishanmmohan.dev (configured via `public/CNAME`)
- Base URL: `/` (root domain)
- Deployment source: GitHub Actions

## Styling

The project uses:
- **Tailwind CSS** with custom CSS variables for theming
- **shadcn-vue design system** with "new-york" style
- **Dark mode support** via CSS classes (`.dark`)
- Color scheme defined in `assets/css/tailwind.css` using HSL CSS variables

## Component Library

shadcn-vue components are sourced from Radix Vue and styled with Tailwind. Available components are in `app/components/ui/`. To add more:
- Visit https://www.shadcn-vue.com/docs/components
- Use `pnpm dlx shadcn-vue@latest add <component-name>`
