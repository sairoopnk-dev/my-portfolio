# Production Portfolio Website

A personal portfolio engineered with Next.js 16, TypeScript, and Tailwind CSS. The design recreates the editorial composition and split card architecture of high-impact visual direction, paired with an electric cobalt/sapphire blue color system.

---

## ⚡ Tech Stack

* **Framework**: Next.js 16 (App Router, Static Pre-rendering, React 19)
* **Styling**: Tailwind CSS v4 with custom mesh gradients, glass surfaces, and drop-glows
* **Language**: TypeScript 5 (Strict Mode)
* **Icons**: Custom accessible SVGs & Lucide React
* **Deployment**: Configured for instant deployment on Vercel
* **Content**: Fully decoupled TypeScript data layer in `content/`

---

## 📂 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx              # Root HTML shell, metadata, skip-link, navbar & footer
│   ├── page.tsx                # Composed landing page
│   ├── globals.css             # Tailwind v4 theme variables, mesh gradients & glows
│   ├── sitemap.ts              # Dynamic XML sitemap generator
│   └── robots.ts               # Search crawler instructions
├── components/
│   ├── ui/                     # Primitives (Button, Badge, Card, StatCard, BrandLogo)
│   ├── layout/                 # Layout chrome (Navbar, MobileNav, Footer, SkipLink)
│   └── sections/               # Sections (Hero, About, Projects, Skills, Experience, Contact)
├── content/                    # Strongly-typed data modules (Edit your bio/projects here)
│   ├── site-config.ts          # Personal branding, title, status, social links
│   ├── projects.ts             # Featured projects, metrics, live URLs, GitHub links
│   ├── experience.ts           # Career milestones & achievements
│   ├── skills.ts               # Technical skill categories & proficiency
│   └── testimonials.ts         # Quotes & endorsements
├── types/
│   └── index.ts                # TypeScript interfaces for all content models
├── public/
│   └── profile.png             # Authentic cutout profile photo
└── vercel.json                 # Production caching & security headers
```

---

## 🛠️ Personalizing Your Portfolio

All personal information is decoupled from UI code. Simply edit the files in the `content/` directory:

1. **Personal Bio, Socials, & Header Status**: Update `content/site-config.ts`.
2. **Projects & Metrics**: Update `content/projects.ts`.
3. **Experience & Roles**: Update `content/experience.ts`.
4. **Skills Matrix**: Update `content/skills.ts`.
5. **Testimonials**: Update `content/testimonials.ts`.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.

---

## 🚢 Deploying to Vercel

1. Push your code to your GitHub repository.
2. Import the repository in [Vercel](https://vercel.com).
3. The build command will automatically run `next build`.
4. Deployment completes with high performance, edge caching, and zero configuration.
