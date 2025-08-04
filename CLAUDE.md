# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Heiderød is a React + TypeScript farm website hosted on GitHub Pages. It's a Norwegian-language site showcasing a family farm with multiple pages including home, shop, photo gallery, and contact information.

## Development Commands

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture & Structure

### Core Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM v7 with browser routing
- **Build Tool**: Vite with React plugin
- **Styling**: CSS Modules for component-scoped styles
- **Deployment**: GitHub Pages via GitHub Actions workflow

### Component Structure
- **App.tsx**: Main router configuration with basename handling for GitHub Pages
- **Pages**: Located in `src/pages/` - HomePage, ShopPage, OurStoryPage, PhotosPage
- **Components**: Located in `src/components/` - Header, Footer, Hero, Carousel, About, Contact
- **Styling**: Each component has an accompanying `.module.css` file

### Content Management
- **Text Management**: Uses a centralized text system with `src/utils/textManager.ts`
- **Content Source**: All text content stored in `src/content/texts.json` in Norwegian
- **Text Access**: Use `getText("path.to.text")` for accessing content (e.g., `getText("hero.title")`)
- **Images**: Stored in `public/bilder2025/` directory

### Key Features
- **Photo Carousel**: Reusable carousel component with navigation arrows
- **Responsive Design**: Uses container class and CSS modules
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Norwegian Content**: All UI text and content in Norwegian

### GitHub Pages Configuration
- **Base URL**: Configured in vite.config.ts for root deployment
- **Asset Handling**: Custom asset naming with hash for cache busting
- **Deployment**: Automatic deployment on main branch pushes via `.github/workflows/static.yml`
- **Build Output**: `dist/` directory uploaded as artifact

### TypeScript Configuration
- **Target**: ESNext with DOM libraries
- **JSX**: react-jsx transform
- **Strict Mode**: Enabled with consistent casing enforcement
- **Module Resolution**: Node-style resolution

### Dependencies
- **Core**: React, React DOM, React Router DOM
- **Build**: Vite, TypeScript, @vitejs/plugin-react
- **External**: googleapis (likely for backend integration)

## Development Notes

- Text content should be added to `texts.json` and accessed via `getText()` function
- New images should be placed in `public/bilder2025/` directory
- Component styles use CSS modules pattern (ComponentName.module.css)
- All user-facing text is in Norwegian
- GitHub Pages deployment is automatic on main branch commits