# Priya Grover — Personal Portfolio

A modern, high-performance personal portfolio website built with **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**. Designed for maximum Google SEO visibility with structured data, Open Graph, multi-language support, and blazing-fast static generation.

## Live Demo

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/priyagrovr/priyagrover)

## Features

### Core
- **Next.js 15 (App Router)** — Static generation with Turbopack for fast builds
- **Tailwind CSS v4** — Utility-first styling with custom design tokens
- **TypeScript** — Full type safety across the entire codebase
- **Responsive Design** — Mobile-first, optimized for all screen sizes
- **Dark/Light Mode** — Toggle with `next-themes`, system preference aware

### SEO & Performance
- **Google-Optimized SEO** — Comprehensive metadata, keywords, and canonical URLs
- **Structured Data (JSON-LD)** — Person, WebSite, ProfilePage, BreadcrumbList schemas
- **Open Graph & Twitter Cards** — Rich social media previews with auto-generated OG image
- **Dynamic Sitemap** — Auto-generated `sitemap.xml` with all sections
- **Robots.txt** — Configured for full crawling
- **Google Search Console** — Ready for verification via environment variable
- **Static Generation** — Pre-rendered pages for fastest load times
- **Semantic HTML** — Proper heading hierarchy, landmarks, and ARIA labels

### Internationalization
- **8 Languages** — English, French, German, Spanish, Dutch, Italian, Hindi, Punjabi
- **Client-Side Switching** — Instant language toggle without page reload
- **Fully Translated** — All UI text, labels, and subtitles across every section

### Design
- **Purple-to-Blue Gradient** — Consistent gradient color scheme throughout
- **Glassmorphism Navbar** — Sticky navigation with backdrop blur
- **Smooth Animations** — Fade-in, float, gradient shifts, progress bars, hover transitions
- **Auto-Generated Favicon** — Gradient "PG" favicon and Apple touch icon

## Sections

| Section | Description |
|---------|-------------|
| **Emergency Banner** | Dismissible gradient banner for availability announcements |
| **Header** | Sticky nav with links, language switcher, dark mode toggle, mobile menu |
| **Hero** | Full-screen intro with animated gradient name, status badge, CTA buttons |
| **About** | Two-column layout with animated avatar, floating stat cards, bio |
| **Skills** | Categorized grid (Frontend, Backend, AI & LLM, Database, DevOps & Cloud, Tools) with progress bars |
| **Projects** | Card grid with gradient headers, tags, GitHub/demo links |
| **Experience** | Vertical timeline with 6 work positions, gradient line |
| **Education** | Education cards with accent stripes, certifications |
| **Testimonials** | LinkedIn recommendation cards with star ratings |
| **Gallery** | Filterable visual grid (All/Web/Mobile/AI) with icon cards |
| **GitHub Stats** | Stats cards and contribution heatmap |
| **Google Maps** | Embedded Google Maps for location |
| **Contact** | Contact form with email card, social links |
| **Footer** | Copyright, social icons, gradient divider |
| **WhatsApp** | Floating WhatsApp chat button with pulse animation |

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Styling** | Tailwind CSS v4 |
| **Language** | TypeScript |
| **Theming** | next-themes |
| **Icons** | react-icons (si, hi2, fi, fa, vsc) |
| **SEO** | JSON-LD, Open Graph, sitemap.xml, robots.txt |
| **Deployment** | Vercel (static export) |

## Skills Covered

The portfolio showcases expertise across 6 categories with 30+ technologies:

- **Frontend** — React, React Native, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3
- **Backend** — Node.js, Python, Django, PHP, Laravel, WordPress
- **AI & LLM** — OpenAI / LLMs
- **Database** — MySQL, PostgreSQL, MongoDB, Firebase, Azure SQL
- **DevOps & Cloud** — AWS, Vercel, Netlify, Git, Heroku, Railway, Render, Neon, Supabase, Docker
- **Tools** — VS Code, Cursor Pro, Claude Code, Postman

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, SEO metadata, JSON-LD schemas
│   ├── page.tsx                # Home page composing all sections
│   ├── globals.css             # Tailwind imports + custom animations/utilities
│   ├── robots.ts               # Dynamic robots.txt generation
│   ├── sitemap.ts              # Dynamic sitemap.xml with section URLs
│   ├── icon.tsx                # Auto-generated 32x32 favicon
│   ├── apple-icon.tsx          # Auto-generated 180x180 Apple touch icon
│   └── og-image.png/route.tsx  # Auto-generated 1200x630 Open Graph image
├── components/
│   ├── Header.tsx              # Emergency banner + navbar (unified fixed header)
│   ├── Hero.tsx                # Full-screen hero section
│   ├── About.tsx               # Bio section with avatar
│   ├── Skills.tsx              # Categorized skills grid
│   ├── Projects.tsx            # Project cards grid
│   ├── Experience.tsx          # Work timeline
│   ├── Education.tsx           # Education & certifications
│   ├── Testimonials.tsx        # Testimonial cards
│   ├── Gallery.tsx             # Filterable gallery
│   ├── GitHubStats.tsx         # GitHub stats & heatmap
│   ├── GoogleMap.tsx           # Embedded Google Maps
│   ├── Contact.tsx             # Contact form & social links
│   ├── Footer.tsx              # Footer with copyright
│   ├── WhatsAppButton.tsx      # Floating WhatsApp button
│   ├── ThemeToggle.tsx         # Dark/light mode toggle
│   └── LanguageSwitcher.tsx    # Language dropdown switcher
├── data/
│   └── portfolio.ts            # All portfolio content (easily customizable)
└── i18n/
    ├── translations.ts         # All translations (8 languages, 90+ keys)
    └── LanguageContext.tsx      # React context for language switching
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/priyagrovr/priyagrover.git
cd priyagrover
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Customization

### Portfolio Content

All portfolio content is centralized in `src/data/portfolio.ts`:

- **Personal info** — Name, role, tagline, email, bio, resume URL
- **Skills** — Tech stack with icons, proficiency levels, categories
- **Projects** — Project cards with descriptions, tags, GitHub/live links
- **Experience** — Work history with company details, locations, descriptions
- **Education** — Degrees and certifications
- **Testimonials** — Client/colleague reviews
- **Gallery** — Portfolio gallery items with categories, icons, gradients
- **Social links** — GitHub, LinkedIn, Twitter URLs
- **WhatsApp number** — Floating chat button phone number
- **Google Maps** — Embed URL and location title

### Translations

Edit `src/i18n/translations.ts` to add or modify language translations. Each language has 90+ translation keys covering every section.

### Theming

Colors and animations are defined in `src/app/globals.css`. The primary gradient is:
```
linear-gradient(135deg, #a855f7, #8b5cf6, #3b82f6)
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL (used in sitemap, OG images, canonical links) | Yes |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification code | No |

## SEO Setup Guide

### 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your site URL
3. Choose "HTML tag" verification method
4. Copy the `content` value from the meta tag
5. Set it as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in your environment
6. Deploy and verify

### 2. Submit Sitemap

1. In Google Search Console, go to **Sitemaps**
2. Enter `sitemap.xml` and submit
3. Google will start crawling your site sections

### 3. Social Media Previews

The OG image is auto-generated at `/og-image.png`. Test your social previews:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 4. Structured Data Validation

Verify your JSON-LD schemas:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Deployment

This project is optimized for **Vercel**:

1. Push to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL` = your domain (e.g., `https://priyagrover.dev`)
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = your GSC verification code
4. Deploy — Vercel auto-detects Next.js and builds

## Performance

- **Lighthouse Score** — Optimized for 90+ on Performance, Accessibility, Best Practices, SEO
- **Static Generation** — All pages pre-rendered at build time
- **Optimized Fonts** — Google Fonts with `next/font` for zero layout shift
- **Minimal Bundle** — Only essential dependencies (next-themes, react-icons)

## License

MIT
