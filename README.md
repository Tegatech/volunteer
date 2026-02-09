# TheReplayMAG Volunteer Portal

A modern, culture-forward volunteer recruitment platform built for **TheReplayMAG** — an independent culture-led platform spotlighting voices, ideas, and movements shaping the now and the next.

**Live Site:** https://tegatech.github.io/volunteer/

---

## Overview

This is a fully responsive, JavaScript-based web application showcasing volunteer opportunities at TheReplayMAG. The site features:

- **Dynamic Job Listings** — Expandable role cards with detailed descriptions and requirements
- **Volunteer Application Form** — Integrated Zoho Forms for seamless submissions
- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Smooth Animations** — Morphing blob backgrounds and scroll-based interactions
- **Analytics Tracking** — PageSense integration for user insights

---

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Lucide React
- **Form Backend:** Zoho Forms
- **Deployment:** GitHub Pages
- **Language:** JavaScript (ES6+)

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tegatech/volunteer.git
   cd volunteer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

---

## Building for Production

To build the static site for deployment:

```bash
npm run build
```

This generates an optimized `dist/` folder. To prepare for GitHub Pages:

```bash
cp -r dist docs
```

Then commit and push the `docs/` folder to GitHub. The site will automatically deploy to GitHub Pages.

---

## Project Structure

```
volunteer/
├── App.jsx                 # Main app component
├── index.jsx               # React entry point
├── constants.js            # Color palette & job data
├── types.js                # Type definitions placeholder
├── components/
│   ├── ApplicationForm.jsx  # Volunteer application form
│   └── BubbleBackground.jsx # Animated background component
├── index.html              # HTML template with tracking script
├── vite.config.js          # Vite configuration with GitHub Pages base path
├── package.json            # Dependencies & scripts
└── docs/                   # Production build (deployed to GitHub Pages)
```

---

## Key Features

### Volunteer Application Form
- Pre-filled role selection based on clicked position
- File upload support (CV/Portfolio)
- Direct Zoho Forms integration for backend processing
- Responsive input fields with validation

### Dynamic Job Display
- Expandable accordion-style job cards
- Real-time filtering and section rendering
- External link handling for special roles (e.g., Xulture)
- Rolling review process indicator

### Responsive Layout
- Mobile-optimized navigation
- Fluid animations and transitions
- Accessible color contrast (WCAG compliant)
- Font scaling for readability

---

## Environment Variables

Optional: If using Gemini API for future features, set in `.env.local`:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

---

## Deployment

The site is automatically deployed via **GitHub Pages** from the `/docs` folder on the `main` branch.

**Current Live URL:** https://tegatech.github.io/volunteer/

### Deployment Workflow

1. Make changes locally
2. Run `npm run build`
3. Run `cp -r dist docs` to update deployment folder
4. Commit and push via Git/GitHub Desktop
5. GitHub automatically redeploys within 1-2 minutes

---

## Analytics

The site includes **PageSense** tracking for user analytics. The tracking script is embedded in `index.html` and automatically collects visitor data.

---

## License

© 2026 TheReplayMAG. All rights reserved.

---

## Support

For issues or questions about the volunteer program, visit: https://thereplaymag.com/connectwithus/
