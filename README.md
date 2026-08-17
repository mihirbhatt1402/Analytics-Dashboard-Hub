# Analytics Dashboard Hub

A professional, enterprise-style Business Intelligence landing page — a single point of access to all analytics dashboards across Operations and OEM Performance.

---

## Project Overview

The Analytics Dashboard Hub is a lightweight, framework-free landing page built with HTML5, CSS3, and vanilla JavaScript. It provides a clean, executive-grade portal experience for navigating all BI dashboards, organized by category, with live search and a dark / light mode toggle.

---

## Features

| Feature | Detail |
|---|---|
| **7 Dashboard Cards** | 2 Operations + 5 OEM Performance |
| **Live Search** | Filters by name, description, and category in real time |
| **Dynamic Statistics** | Counts update as search filters are applied |
| **Dark / Light Mode** | Toggle with preference saved to `localStorage` |
| **Responsive Grid** | CSS Grid adapts from 320 px mobile to wide desktop |
| **Accessibility** | Semantic HTML, ARIA labels, keyboard navigation (Tab, Enter, Space), visible focus states |
| **Page Load Animation** | Subtle fade-up on hero, stats, and section cards |
| **Reduced Motion** | All animations disabled when `prefers-reduced-motion: reduce` |

---

## Dashboards

### Operations

| Dashboard | URL |
|---|---|
| Daily Trigger Dashboard | https://mihirbhatt1402.github.io/Daily-Trigger-Dashboard/ |
| CPS Lead Delivery Dashboard | https://adityakumar-bikes.github.io/cps-leads/ |

### OEM Performance

| Dashboard | URL |
|---|---|
| TVS Lead Disposition Dashboard | https://mihirbhatt1402.github.io/TVS-Lead-Disposition-Dashboard/ |
| Honda Motorcycles & Scooters Analytics | https://mihirbhatt1402.github.io/Honda-Motorcycles-and-Scooters-Analytics/ |
| Royal Enfield Performance Analytics | https://mihirbhatt1402.github.io/Royal-Enfield-Performance-Analytics/ |
| Harley-Davidson X440 Lead Performance Analytics | https://mihirbhatt1402.github.io/H-D-X-440-Lead-Performance-Analytics/ |
| Jawa AMJ Performance Dashboard | https://mihirbhatt1402.github.io/Jawa-AMJ-Performance-Dashboard/ |

---

## Technologies Used

- **HTML5** — Semantic structure, ARIA roles, accessibility attributes
- **CSS3** — Custom properties (design tokens), CSS Grid, Flexbox, `@keyframes` animations
- **Vanilla JavaScript** — Theme management, date rendering, live search, keyboard shortcuts
- **Google Fonts** — [Inter](https://fonts.google.com/specimen/Inter) (400, 500, 600, 700, 800)
- **Font Awesome 6 Free** — Icons (CDN)

No React, Angular, Vue, Bootstrap, Tailwind, jQuery, or any other framework / library.

---

## Folder Structure

```
Analytics-Dashboard-Hub/
├── index.html    ← HTML structure and all content
├── style.css     ← Design tokens, layout, components, themes
├── script.js     ← Theme toggle, dates, search, keyboard shortcuts
└── README.md     ← This file
```

---

## Deployment — GitHub Pages

### First-time setup

1. Create a new public GitHub repository named **`Analytics-Dashboard-Hub`**.
2. Upload (or push) all four project files to the `main` branch.
3. Go to **Settings → Pages** in your repository.
4. Under **Source**, choose:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**.
6. After ~60 seconds your hub is live at:

```
https://mihirbhatt1402.github.io/Analytics-Dashboard-Hub/
```

### Updating the hub

```bash
# Clone your repo (first time)
git clone https://github.com/mihirbhatt1402/Analytics-Dashboard-Hub.git
cd Analytics-Dashboard-Hub

# Edit files, then push
git add .
git commit -m "Update dashboard list"
git push origin main
```

GitHub Pages redeploys automatically on every push to `main`.

---

## Color Palette

| Token | Light | Dark |
|---|---|---|
| Background | `#EEF1F7` | `#08101E` |
| Surface | `#FFFFFF` | `#101929` |
| Operations Accent | `#2563EB` | `#3B82F6` |
| OEM Accent | `#7C3AED` | `#A78BFA` |
| Primary Text | `#111827` | `#F3F4F6` |
| Muted Text | `#6B7280` | `#9CA3AF` |
| Border | `#DDE2EF` | `#1E2D47` |

---

## Future Improvements

- "Last visited" indicator per dashboard card using `localStorage`
- Pinned / favourited dashboards feature
- Dashboard thumbnail previews
- Keyboard shortcut (`/`) to jump focus to the search bar
- Live status indicator (up / down) fetched from each dashboard's URL

---

## License

MIT — Created by **Mihir Bhatt**
