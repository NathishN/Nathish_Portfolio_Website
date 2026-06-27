# Nathish N — Portfolio Website

A personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies — just a fast, hand-crafted static site.

**Live:** [nathish-portfolio.vercel.app](https://nathish-portfolio.vercel.app)

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Name, role, resume download, social links, scroll indicator |
| 02 | **About** | Bio, focus tags, key facts (degree, CGPA, location, availability) |
| 03 | **Skills** | Three skill cards — Data Analytics, AI & ML, Engineering & Tools |
| 04 | **Projects** | Five projects with descriptions, tech stack tags, and GitHub links |
| 05 | **Journey** | Timeline of experience, internships, certifications (2023–2026) |
| 06 | **Contact** | Phone, email, LinkedIn, GitHub + a contact form |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — custom properties, grid, flexbox, keyframe animations |
| Logic | Vanilla JavaScript (ES6+) — no libraries |
| Fonts | Playfair Display · Instrument Sans · JetBrains Mono (Google Fonts) |
| Hosting | Vercel |

---

## Features

- **Custom cursor** — dot + lagging ring with magnetic pull on buttons
- **Scroll-triggered animations** — fade-up, slide-in, and stagger via `IntersectionObserver`
- **Animated hero** — word-by-word reveal, orbiting decorative rings, floating dots, blinking cursor
- **Infinite marquee** — skills ticker that pauses on hover
- **Sticky timeline sidebar** — active year highlights as you scroll through the Journey section
- **Magnetic buttons** — subtle `translate` effect on `nav-cta`, CTA buttons, and submit
- **Responsive** — mobile hamburger menu, single-column layout under 960px, cursor hidden on touch
- **Minimal scrollbar** — 3px custom scrollbar matching the design system

---

## Project Structure

```
Nathish Portfolio Website/
├── index.html   # All content and markup
├── style.css    # All styles, animations, and responsive rules
└── script.js    # Cursor, scroll effects, observer, magnetic, form
```

---

## Running Locally

No install needed. Open `index.html` directly in a browser:

```bash
# Option 1 — double-click index.html in File Explorer

# Option 2 — VS Code Live Server (auto-refresh on save)
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

---

## Deployment

Deployed via the Vercel CLI:

```bash
npm install -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

Vercel auto-detects a static site — no `vercel.json` config required.

---

## Projects Featured

| # | Project | Stack |
|---|---------|-------|
| 001 | E-Commerce Demand & Profitability Intelligence System | Python · SQL · Power BI |
| 002 | Multi-Agent Stock Research System (CrewAI) | Python · CrewAI · LLMs |
| 003 | HR Policy RAG Chatbot | FastAPI · Pinecone · Python · LLMs |
| 004 | Customer Shopping Behaviour Analysis | Excel · Python · SQL · Power BI |
| 005 | Movie Recommendation System | Python · Scikit-learn · Pandas |

---

## Contact

- **Email** — nathishnataraj@gmail.com
- **LinkedIn** — [nathish-n-20a203292](https://www.linkedin.com/in/nathish-n-20a203292/)
- **GitHub** — [NathishN](https://github.com/NathishN)
