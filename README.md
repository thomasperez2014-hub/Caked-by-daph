# Caked by Daphh — Website

A custom cake business website built with Next.js App Router and Tailwind CSS.

## Phase 1 — Public Frontend

This is Phase 1 of the Caked by Daphh website. It includes the full public-facing site with no backend dependencies. All forms include validation and success states, ready to wire up to Supabase in Phase 2.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or download the project
cd caked-by-daphh

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout (Navbar + Footer)
│   ├── globals.css        # Global styles + brand tokens
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── menu/page.tsx      # Menu & Pricing page
│   ├── custom-cakes/page.tsx  # Custom Cakes page
│   ├── gallery/page.tsx   # Gallery page
│   ├── reviews/page.tsx   # Reviews + Leave a Review
│   ├── faq/page.tsx       # FAQ (accordion)
│   └── contact/page.tsx   # Order Inquiry form
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Responsive nav + mobile menu
│   │   └── Footer.tsx     # Footer
│   └── ui/
│       ├── CakePlaceholder.tsx  # SVG cake card placeholder
│       ├── StarRating.tsx       # Interactive star rating
│       └── SectionHeader.tsx    # Reusable section header
```

---

## Brand Colors

| Token          | Hex       | Usage                    |
|----------------|-----------|--------------------------|
| `cream`        | `#F8F4EE` | Page background          |
| `beige`        | `#F2ECE4` | Section alternates       |
| `taupe`        | `#6E5E4E` | Body text                |
| `accent`       | `#B89D84` | Buttons, highlights      |
| `dark-taupe`   | `#4F4338` | Headings, dark sections  |
| `border`       | `#E6DDD3` | Card & input borders     |

---

## Pages

| Route          | Description                            |
|----------------|----------------------------------------|
| `/`            | Home with hero, categories, gallery preview, how-to, testimonials |
| `/about`       | About Daphh + brand values             |
| `/menu`        | Pricing tiers + flavor options         |
| `/custom-cakes`| Occasion types + ordering guidelines   |
| `/gallery`     | Placeholder gallery with filter tabs   |
| `/reviews`     | Customer reviews + leave a review form |
| `/faq`         | Accordion FAQ                          |
| `/contact`     | Order inquiry form                     |

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect the repo at [vercel.com](https://vercel.com).

---

## Phase 2 Roadmap

The following features are planned for Phase 2 with Supabase:

- [ ] Supabase Auth — Admin login
- [ ] `inquiries` table — Store order form submissions
- [ ] `reviews` table — Store submitted reviews with `approved` flag
- [ ] `gallery_images` table — Store cake photos with metadata
- [ ] Supabase Storage — Image uploads for gallery + review photos
- [ ] Admin dashboard — Manage inquiries, approve reviews, upload gallery photos
- [ ] Public pages pull from Supabase (gallery images, approved reviews)
- [ ] Featured images + featured reviews on homepage

### Supabase Integration Points

Each page has comments marked `// Phase 2:` where backend calls will be added:

- `src/app/contact/page.tsx` → POST to `inquiries` table
- `src/app/reviews/page.tsx` → POST to `reviews` table
- `src/app/gallery/page.tsx` → GET from `gallery_images` table
- `src/app/page.tsx` → GET featured images and featured reviews

---

## License

Private — Caked by Daphh. All rights reserved.
