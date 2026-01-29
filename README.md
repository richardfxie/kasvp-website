# KAS Venture Partners Website

A clean, modern website for KAS Venture Partners, built with plain HTML, CSS, and JavaScript.

## Features

- **Pure HTML/CSS/JS**: No framework overhead, fast loading times
- **Responsive Design**: Optimized for all screen sizes with mobile-first approach
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Smooth Animations**: CSS-based animations for page transitions and interactions
- **SEO Ready**: Static HTML pages with proper meta tags
- **Easy Deployment**: Can be hosted on any static hosting service

## Pages

- **Home** (`/index.html`) - Hero section with company branding
- **Kevin Ulrich** (`/kevin-ulrich.html`) - Founder profile page
- **Team** (`/team.html`) - Investment team listing
- **Team Members** (`/team/*.html`) - Individual team member profiles:
  - Julian Handel (Partner)
  - Lucas Lorentz (Associate)
  - Richard Xie (Analyst)
- **Contact** (`/contact.html`) - Contact form
- **Legal** (`/legal.html`) - Legal disclosure page
- **404** (`/404.html`) - Error page

## Getting Started

### Prerequisites

- Node.js (for Tailwind CSS compilation only)
- npm or npx

### Installation

```bash
# Install Tailwind CSS
npm install

# Build CSS (compile Tailwind)
npm run build:css

# Or watch for changes during development
npm run watch:css
```

### Development

To view the site locally, you can use any static file server:

```bash
# Using Python (recommended)
python3 -m http.server 8000

# Using Node.js http-server (install with: npm install -g http-server)
http-server -p 8000

# Using PHP
php -S localhost:8000
```

Open [http://localhost:8000](http://localhost:8000) to view the site.

## Project Structure

```
/
├── index.html              # Home page
├── kevin-ulrich.html       # Founder profile
├── team.html               # Team listing
├── contact.html            # Contact form
├── legal.html              # Legal disclosure
├── 404.html                # Error page
├── team/                   # Team member pages
│   ├── julian-handel.html
│   ├── lucas-lorentz.html
│   └── richard-xie.html
├── css/
│   └── styles.css          # Compiled Tailwind CSS
├── js/
│   ├── main.js             # Navigation and common functionality
│   └── contact.js          # Contact form handling
├── images/                 # All images
│   ├── hero-domino.jpg
│   ├── kevin-ulrich.jpg
│   ├── julian-handel.jpg
│   ├── lucas-lorentz.jpg
│   └── richard-xie.jpg
├── data/
│   └── team.json           # Team data (reference)
└── src/
    └── input.css           # Tailwind source file
```

## Images

Images are located in `/images/`:

| File | Description | Size |
|------|-------------|------|
| `hero-domino.jpg` | Hero background (Domino Sugar Factory) | 1920x1080+ |
| `kevin-ulrich.jpg` | Kevin Ulrich portrait | 3:4 aspect ratio |
| `julian-handel.jpg` | Julian Handel portrait | 3:4 aspect ratio |
| `lucas-lorentz.jpg` | Lucas Lorentz portrait | 3:4 aspect ratio |
| `richard-xie.jpg` | Richard Xie portrait | 3:4 aspect ratio |

## Customization

### Team Members

To update team member information:
1. Edit the HTML files directly in `/team/` for individual pages
2. Edit `team.html` to update the team listing
3. Optionally update `/data/team.json` for reference

### Styling

- **Tailwind source**: `/src/input.css`
- **Tailwind config**: `/tailwind.config.js`
- After making changes, run `npm run build:css` to recompile

### Contact Form

The contact form in `/contact.html` currently simulates submission. To integrate with a real backend:

1. **Option A - FormSpree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form
2. **Option B - Netlify Forms**: Add `netlify` attribute to the form tag
3. **Option C - Custom API**: Update the fetch call in `/js/contact.js`

## Deployment

This site can be deployed to any static hosting service:

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source

### Other Options
- **AWS S3 + CloudFront**
- **Cloudflare Pages**
- **Firebase Hosting**
- **DigitalOcean App Platform**

## Build Process

The only build step required is compiling Tailwind CSS:

```bash
npm run build:css
```

This creates a minified CSS file at `/css/styles.css` that includes all the Tailwind utilities used in your HTML files.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tech Stack

- **HTML5**: Semantic markup
- **CSS**: Tailwind CSS 3.4+ with custom animations
- **JavaScript**: Vanilla ES6+ (no dependencies)
- **Build Tool**: Tailwind CLI (for CSS compilation only)

## License

© 2026 KAS Venture Partners. All rights reserved.
