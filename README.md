# KAS Venture Partners Website

A modernized website for KAS Venture Partners, built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI/UX**: Clean, dark-themed design with smooth page transitions
- **Responsive Design**: Optimized for all screen sizes with mobile-first approach
- **Page Transitions**: Smooth animations powered by Framer Motion
- **SEO Ready**: Built with Next.js App Router for optimal SEO
- **Type-Safe**: Full TypeScript support

## Pages

- **Home** (`/`) - Hero section with company branding
- **Kevin Ulrich** (`/kevin-ulrich`) - Founder profile page
- **Team** (`/team`) - Investment team listing
- **Team Member** (`/team/[slug]`) - Individual team member profiles
- **Contact** (`/contact`) - Contact form
- **Legal** (`/legal`) - Legal disclosure page

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

## Adding Images

Place the following images in `/public/images/`:

| File | Description | Recommended Size |
|------|-------------|------------------|
| `hero-domino.jpg` | Hero background (Domino Sugar Factory) | 1920x1080+ |
| `kevin-ulrich.jpg` | Kevin Ulrich portrait | 800x1067 (3:4) |
| `julian-handel.jpg` | Julian Handel portrait | 800x1067 (3:4) |
| `lucas-lorentz.jpg` | Lucas Lorentz portrait | 800x1067 (3:4) |
| `richard-xie.jpg` | Richard Xie portrait | 800x1067 (3:4) |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── kevin-ulrich/      # Kevin Ulrich page
│   ├── team/              # Team pages
│   ├── contact/           # Contact page
│   └── legal/             # Legal page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   ├── PageTransition.tsx # Page transition wrapper
│   └── ...
└── data/                  # Static data
    └── team.ts            # Team member data
```

## Customization

### Team Members

Edit `/src/data/team.ts` to update team member information.

### Styling

- Global styles: `/src/app/globals.css`
- Tailwind config: `/tailwind.config.ts`

### Contact Form

The contact form in `/src/app/contact/page.tsx` currently simulates submission. Integrate with your preferred form handling service (Formspree, Netlify Forms, custom API, etc.).

## Deployment

This site is optimized for deployment on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
