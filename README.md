# Win88 Today - Official Website

Public marketing website for Win88 Today gaming platform.

## Domains

- **Main Website**: https://win88.today (this repo)
- **Gaming Platform**: https://game.ubet.fun

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel / Cloudflare Pages

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Then add `win88.today` as custom domain in Vercel dashboard.

### Option 2: Cloudflare Pages

1. Connect this repository in Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `.next`
4. Add custom domain: `win88.today`

## Project Structure

```
win88today-website/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout with SEO
│   └── globals.css       # Global styles
├── public/
│   ├── og-image.png      # Social share image
│   └── favicon.ico       # Site icon
└── package.json
```

## SEO Features

- ✅ Server-side rendering (SSR)
- ✅ Meta tags & Open Graph
- ✅ Schema.org structured data (TODO)
- ✅ Mobile responsive
- ✅ Fast page loads

## Related Repositories

- [gaming-platform](https://github.com/wcasa77/gaming-platform) - Main gaming app (game.ubet.fun)
