

## Utkal Creator Hub — Full Website Build

### Design System
- **Colors**: Saffron orange (#FF6B00-ish), deep navy (#1a1f4e-ish), white — reflecting Odisha cultural pride
- **Font**: Inter (already available) — clean, modern
- **Mobile-first** responsive design throughout
- **Tone**: Bold, confident, local

### Pages & Structure

#### 1. Homepage (`/`)
- **Hero**: Bold headline "Get More Customers With Local Influencer Marketing — Built for Balasore Businesses" + sub-headline + "Book Your Free Strategy Call" CTA (WhatsApp link) + looping background gradient/pattern
- **Pain Points**: 3 icon cards — no time, competitors ahead, influencer trust
- **Solutions**: 3 service pillars — Influencer Marketing, AI Video, Real Shop Videos
- **Social Proof**: Mini case study cards (restaurant, cloud kitchen, travel, healthcare)
- **Why Us**: 4 trust points about local expertise
- **How It Works**: 3-step process (Book → Strategy → Grow)
- **Testimonials**: Client quotes strip
- **Final CTA**: "Ready to Turn Scrollers Into Customers?"

#### 2. Services Page (`/services`)
- Detailed sections for each service: Influencer Marketing, AI Video & Animation, Real Shop Videos
- Each with description, benefits, and use cases
- Pricing CTA at bottom

#### 3. Case Studies Page (`/case-studies`)
- Cards for each industry with: background, problem, strategy, results
- Individual detail view or expandable sections
- CTA after each case study

#### 4. About Page (`/about`)
- Founder/team story, Balasore connection, mission statement
- Stats bar (businesses helped, industries, etc.)
- Trust builders

#### 5. Contact Page (`/contact`)
- "Let's Talk" headline + WhatsApp button (primary CTA)
- Phone number display
- Optional Google Maps embed placeholder

#### 6. Blog Page (`/blog`)
- Blog listing with cards (title, excerpt, date)
- Individual blog post layout (`/blog/:slug`)
- Content stored as static data (no backend needed)

### Global Components
- **Sticky header** with navigation + "Book Free Call" WhatsApp CTA button
- **Mobile hamburger menu**
- **Floating WhatsApp button** (bottom-right, always visible)
- **Footer** with links, contact info, social media icons
- **Exit intent popup**: "Get a free 15-min marketing audit" (triggers on mouse leave)
- **Scarcity badge**: "We only take 5 new clients per month"

### SEO
- Unique H1 per page with target keywords
- Meta titles/descriptions per page via React Helmet or document.title
- Semantic HTML structure (h1, h2, section, article)
- Alt text on all images

### Conversion Elements
- WhatsApp links pre-filled with contextual messages per page
- Multiple CTAs per page
- Mobile-optimized tap targets

