# Priya Grover — Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**. Features a purple-to-blue gradient design, dark/light mode, multi-language support, and smooth animations.

## Live Demo

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/priyagrovr/priyagrover)

## Features

- **Responsive Design** — Mobile, tablet, and desktop optimized
- **Dark/Light Mode** — Toggle with `next-themes`, defaults to dark
- **Multi-Language Support** — English, French, German, Spanish, Dutch, Italian, Hindi, Punjabi
- **SEO Optimized** — Open Graph, Twitter cards, JSON-LD structured data, robots.txt, sitemap.xml
- **Favicon** — Auto-generated gradient favicon and Apple touch icon
- **Purple-to-Blue Gradient** — Consistent gradient color scheme throughout
- **Smooth Animations** — Fade-in, gradient shifts, hover transitions
- **Glassmorphism Navbar** — Sticky navigation with backdrop blur

## Sections

| Section | Description |
|---------|-------------|
| Emergency Banner | Dismissible gradient banner for availability/announcements |
| Navbar | Sticky nav with links, language switcher, dark mode toggle |
| Hero | Full-screen intro with animated gradient name and CTA buttons |
| About | Two-column layout with avatar and bio |
| Skills | Categorized tech stack grid with progress indicators |
| Projects | Card grid with gradient overlays and GitHub/demo links |
| Experience | Vertical timeline with 6 work positions |
| Education | Education cards and certifications |
| Testimonials | Client/colleague testimonial cards |
| Gallery | Visual grid with gradient placeholders and hover effects |
| GitHub Stats | Stats cards and contribution activity placeholder |
| Google Maps | Embedded Google Maps for location |
| Contact | Contact form with social links |
| Footer | Copyright, social icons |
| WhatsApp | Floating WhatsApp chat button |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Theming:** next-themes
- **Icons:** react-icons
- **Deployment:** Vercel-compatible

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, ThemeProvider, LanguageProvider, SEO metadata
│   ├── page.tsx            # Home page composing all sections
│   ├── globals.css         # Tailwind imports + custom utilities
│   ├── robots.ts           # Dynamic robots.txt generation
│   ├── sitemap.ts          # Dynamic sitemap.xml generation
│   ├── icon.tsx            # Auto-generated favicon
│   └── apple-icon.tsx      # Auto-generated Apple touch icon
├── components/
│   ├── EmergencyBanner.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Testimonials.tsx
│   ├── Gallery.tsx
│   ├── GitHubStats.tsx
│   ├── GoogleMap.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── ThemeToggle.tsx
│   └── LanguageSwitcher.tsx
├── data/
│   └── portfolio.ts        # All portfolio content (easily customizable)
└── i18n/
    ├── translations.ts     # All language translations (8 languages)
    └── LanguageContext.tsx  # React context for language switching
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
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

All portfolio content is centralized in `src/data/portfolio.ts`:

- **Personal info** — Name, role, tagline, email, bio
- **Skills** — Tech stack with icons and proficiency levels
- **Projects** — Project cards with descriptions, tags, links
- **Experience** — Work history with company details
- **Education** — Degrees and certifications
- **Testimonials** — Client/colleague reviews
- **Gallery** — Portfolio gallery items
- **Social links** — GitHub, LinkedIn, Twitter
- **WhatsApp number** — Floating chat button
- **Google Maps** — Embed URL and location title

To add or modify translations, edit `src/i18n/translations.ts`.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL (used in sitemap, SEO) | `https://priyagrover.dev` |

## Deployment

This project is optimized for **Vercel**:

1. Push to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` environment variable
4. Deploy

## License

MIT
