# Nexora — Modern SaaS Product Landing Page

A high-converting, fully responsive, production-ready SaaS product landing page designed and developed for **Nexora**, a modern productivity and project management platform. Built strictly with modern semantic **HTML5**, **CSS3**, and **Vanilla JavaScript** without heavy framework overhead.

---

## 🌟 Live Demo & Repository
- **Repository**: [https://github.com/ziyakausar07/product-landing.git](https://github.com/ziyakausar07/product-landing.git)
- **Live Preview (GitHub Pages)**: `https://ziyakausar07.github.io/product-landing/`

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features & Interactivity](#key-features--interactivity)
3. [Technology Stack](#technology-stack)
4. [Folder Architecture](#folder-architecture)
5. [Design System Specification](#design-system-specification)
   - [Color Palette](#color-palette)
   - [Typography Scale](#typography-scale)
   - [Spacing & Elevation](#spacing--elevation)
6. [Responsive Breakpoints & Layout](#responsive-breakpoints--layout)
7. [Accessibility & Functionality](#accessibility--functionality)
8. [Local Setup & How to Run](#local-setup--how-to-run)
9. [Deployment Instructions](#deployment-instructions)
10. [Known Limitations & Demo Disclaimers](#known-limitations--demo-disclaimers)

---

## 1. Project Overview
Nexora solves team fragmentation by consolidating project management, task tracking, team communication, and automated analytics into a single unified workspace. This landing page conveys value, showcases the core product dashboard, compares tiered pricing models, answers user questions through an accessible accordion, and drives signup conversions.

---

## 2. Key Features & Interactivity

### 📌 Sticky Glassmorphism Navigation Bar
- Stays anchored at top with frosted glass blur effect (`backdrop-filter: blur(14px)`).
- Scrollspy tracks the user's viewport position and automatically highlights the active link.
- Smooth scrolling on click to anchor sections (`#features`, `#benefits`, `#pricing`, `#faq`).
- Mobile hamburger navigation drawer with animated state transitions and screen lock.

### 🚀 High-Impact Hero Section
- Bold, high-conversion headline: *"Work Smarter. Achieve More."* with vibrant indigo/violet gradients.
- Dual action CTA buttons: **Get Started Free** and **Explore Features**.
- Social proof trust indicator: Stacked user avatars, 5-star rating, and *"Trusted by 10,000+ productive teams"*.
- **Interactive Dashboard Preview**: macOS window chrome, mini sidebar, live Sprint 14 progress bar, velocity chart SVG, live team activity feed, and floating achievement badges.

### ⚡ 6-Card Feature Showcase
Responsive CSS grid featuring 6 core capabilities:
1. **Smart Project Management** — Kanban boards, milestones, and task priorities.
2. **Team Collaboration** — Centralized discussion threads and file attachments.
3. **Real-Time Analytics** — Automated velocity metrics and burn-down reports.
4. **Workflow Automation** — Zero-code rule triggers and status automation.
5. **Secure Cloud Workspace** — AES-256 encryption, SOC 2 compliance, and RBAC.
6. **Progress Tracking** — Milestones, timelines, and weekly executive summaries.

### 📊 Metric-Driven Benefits Section
Three deep-dive benefit rows with alternating layouts, checklist items, and statistical comparative benchmarks:
- **Save Time**: 4.8 hrs saved/week per member vs. legacy multitasking.
- **Improve Collaboration**: 99.4% on-time milestone delivery.
- **Make Better Decisions**: 3.2x faster bottleneck detection.

### 💳 Dynamic Pricing Calculator
- Interactive monthly/annual billing switch with a **"Save 20%"** discount badge.
- Dynamic JavaScript price calculation with seamless numeric transitions:
  - **Starter**: $0/mo (Free forever)
  - **Professional**: $19/mo (or $15/mo billed $180/yr) — Featured with *Recommended* badge.
  - **Team**: $49/mo (or $39/mo billed $468/yr).
- Pricing cards automatically collapse to a single column on tablet/mobile screens.

### 💬 Social Proof & Testimonials
Three authentic customer testimonial cards featuring real quote narratives, 5-star badges, customer avatars, names, and verified job titles.

### ❓ Accessible FAQ Accordion
- Fully compliant with **WAI-ARIA** specifications (`aria-expanded`, `aria-controls`, `role="region"`).
- Single-expansion model: only one question is open at a time.
- Smooth CSS `max-height` transitions calculated dynamically using element `scrollHeight`.
- Complete keyboard accessibility: arrow key navigation, `Home`, `End`, `Enter`, and `Space`.

### 🎯 Final Call-to-Action (CTA) & Footer
- Contrasting dark navy gradient hero card with high visual energy.
- Complete multi-column footer with social links, legal notices, and dynamic copyright year.

### 💡 Interactive Demo Feedback Modal & Toasts
Clicking interactive buttons triggers a polished modal and non-intrusive toast notification system rather than dead links or 404s.

---

## 3. Technology Stack
- **HTML5**: Semantic elements (`header`, `nav`, `main`, `section`, `article`, `blockquote`, `footer`).
- **CSS3**: Custom CSS variables, Flexbox, CSS Grid, animations, and media queries.
- **Vanilla JavaScript (ES6+)**: Zero framework dependencies, clean event listeners, passive scroll events.
- **Typography**: Google Fonts (*Plus Jakarta Sans* with system fallbacks).
- **Icons**: Handcrafted inline SVG vector icons for instantaneous, zero-latency rendering.

---

## 4. Folder Architecture
```text
product-landing/
├── index.html            # Main semantic HTML structure
├── css/
│   └── styles.css        # Complete CSS design system, layout, and utilities
├── js/
│   └── script.js         # Interactivity (pricing, accordion, navigation, demo)
├── assets/
│   └── images/           # Image assets and graphic resources
├── .gitignore            # Git exclusion rules
└── README.md             # Complete project and design documentation
```

---

## 5. Design System Specification

### Color Palette
| Token Name | HEX Value | Purpose |
| :--- | :--- | :--- |
| `--color-primary` | `#4f46e5` (Indigo 600) | Primary branding, buttons, active states |
| `--color-primary-hover` | `#4338ca` (Indigo 700) | Button hover & focused states |
| `--color-primary-subtle` | `#eef2ff` (Indigo 50) | Icon badge & pill background |
| `--color-accent` | `#7c3aed` (Violet 600) | Gradients & secondary highlights |
| `--color-emerald` | `#059669` (Emerald 600) | Positive metrics & discount badges |
| `--color-navy-950` | `#0a0f1d` | Deepest dark navy / CTA card bg |
| `--color-navy-900` | `#0f172a` | Primary text and major headings |
| `--color-navy-600` | `#475569` | Body copy and descriptions |
| `--color-navy-200` | `#e2e8f0` | Subtle borders and divider lines |
| `--color-bg-body` | `#f8fafc` | Clean off-white page canvas |
| `--color-bg-surface` | `#ffffff` | Pure white cards and elevated modules |

### Typography Scale
- **Primary Font**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Scale**:
  - `Display / Hero`: `3.5rem` / `56px` (`font-weight: 800`, `letter-spacing: -0.035em`)
  - `H1 / Section Titles`: `2.25rem` / `36px` (`font-weight: 800`)
  - `H2 / Benefit Titles`: `1.875rem` / `30px` (`font-weight: 700`)
  - `H3 / Card Titles`: `1.25rem` / `20px` (`font-weight: 700`)
  - `Body Base`: `1.0rem` / `16px` (`font-weight: 400`, `line-height: 1.6`)
  - `Small / Captions`: `0.875rem` / `14px` (`font-weight: 500`)
  - `Badges & Microcopy`: `0.75rem` / `12px` (`font-weight: 700`, uppercase)

### Spacing & Elevation
- **Spacing Scale**: Multiples of 4px/8px (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`).
- **Shadows**:
  - `--shadow-sm`: `0 2px 4px 0 rgba(15, 23, 42, 0.04)`
  - `--shadow-md`: `0 4px 12px -2px rgba(15, 23, 42, 0.06)`
  - `--shadow-lg`: `0 12px 28px -4px rgba(15, 23, 42, 0.08)`
  - `--shadow-xl`: `0 24px 48px -12px rgba(15, 23, 42, 0.12)`
  - `--shadow-glow`: `0 10px 25px -4px rgba(79, 70, 229, 0.25)`

---

## 6. Responsive Breakpoints & Layout
The page is implemented with a mobile-first philosophy:
- **Mobile Viewports (375px & 430px)**:
  - Navigation collapses to an animated hamburger toggle.
  - Hero column stacks with dashboard mockup centered below copy.
  - Feature grid and pricing cards stack into a clean single-column stream.
  - Zero horizontal overflow.
- **Tablet (768px)**:
  - 2-column feature card grid.
  - Alternating benefit layout with balanced proportions.
- **Laptop (1024px)**:
  - Full desktop navigation with visible CTA and Sign In buttons.
  - 2-column hero with 3D elevation preview.
  - 3-column feature grid.
- **Desktop (1440px+)**:
  - Max container width clamped at `1200px` for optimal reading line length.

---

## 7. Accessibility & Functionality
- **Semantic Structure**: Header, nav, main, section, article, and footer tags.
- **Color Contrast**: All text conforms to WCAG 2.1 AA standards for contrast against light and dark backgrounds.
- **Focus Rings**: Distinct keyboard `:focus-visible` outline for navigation and buttons.
- **ARIA Attributes**: `aria-expanded`, `aria-controls`, `aria-hidden`, and role descriptions for interactive dialogs and accordions.
- **Reduced Motion Support**: `@media (prefers-reduced-motion: reduce)` disables non-essential animations for users with vestibular sensitivities.

---

## 8. Local Setup & How to Run

### Option A: Direct Browser Opening
Because this project uses vanilla HTML, CSS, and JavaScript without build compilation, you can run it immediately:
1. Clone the repository:
   ```bash
   git clone https://github.com/ziyakausar07/product-landing.git
   cd product-landing
   ```
2. Double-click `index.html` to open it in your browser.

### Option B: Local Development Server (Recommended)
Using Python or VS Code Live Server:

**Using Python:**
```bash
# Python 3.x
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

**Using Node.js `npx serve`:**
```bash
npx serve .
```

---

## 9. Deployment Instructions

### Free Deployment to GitHub Pages
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern SaaS landing page"
   git push origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Source**: `Deploy from a branch`.
   - Select Branch: `main` / `root`, and click **Save**.
3. Your site will be published at: `https://<username>.github.io/product-landing/`.

### Deployment to Vercel or Netlify
- **Vercel**: Import the GitHub repo into Vercel dashboard and click **Deploy**.
- **Netlify**: Drag and drop the project folder or link your repository for continuous deployment.

---

## 10. Known Limitations & Demo Disclaimers
- **Fictional SaaS Product**: Nexora is an illustrative digital product showcase.
- **Demo Mode**: Authentication, checkout forms, and backend API integration are represented with interactive client-side demo dialogs and toasts for a seamless evaluation experience.

---
© 2026 Nexora Technologies, Inc. All rights reserved.
