# SidSphere

**SidSphere** is my personal portfolio website — a digital folio built to bring together my work, skills, education, experience, certificates, achievements, and creative interests in one interactive experience.

Rather than following the usual portfolio/dashboard layout, SidSphere is designed as an **interactive editorial-style folio**, combining typography, motion, depth, visual storytelling, and responsive web design.

**Live Website:** https://sidhaaarth24.github.io/sidsphere/

---

## Overview

SidSphere is a personal portfolio project created to experiment with the intersection of:

* Computer Science
* Web Development
* UI/UX Design
* Creative Technology
* Interactive Motion
* Typography
* Visual Design
* Digital Storytelling

The interface is inspired by **art books, editorial layouts, posters, paper archives, and experimental digital interfaces**.

The goal was not simply to build a portfolio, but to make the portfolio itself feel like a piece of creative work.

---

## Features

### Interactive Folio Interface

* Editorial / art-book inspired design
* Chapter-based page structure
* Fixed navigation rail
* Scroll-driven chapter tracking
* Folio progress indicator
* Responsive navigation
* Mobile menu
* Smooth scrolling

### Visual Experience

* Oversized typography
* Serif and monospace typography combinations
* Poster-inspired project cards
* Paper-style education and experience sections
* Depth and layered visual elements
* 3D-inspired interface elements
* Pointer-reactive interactions
* Magnetic buttons and controls
* Grain and light-leak effects

### Portfolio Sections

The website currently contains:

* Home
* About
* Skills
* Languages & Scripts
* Education
* Experience
* Projects
* Certificates
* Awards
* Contact
* Social Links

### Additional Interactions

* Light / dark theme
* Persistent theme preference
* Command palette
* Keyboard navigation
* Interactive language index
* Certificate archive
* Project previews
* Hidden SidSphere easter egg
* Reduced-motion support
* Responsive design

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* TypeScript

### Framework / Tooling

* Vite
* TypeScript
* Tailwind CSS
* PostCSS
* Autoprefixer

### Libraries

* Three.js
* Font Awesome

### Fonts

The interface uses a combination of:

* Manrope
* DM Mono
* Playfair Display
* UnifrakturCook

---

## Project Structure

```text
SidSphere/
│
├── data/
│   └── content.json
│
├── public/
│   └── images/
│       ├── projects/
│       ├── certificates/
│       ├── awards/
│       └── favicon.png
│
├── src/
│   ├── main.ts
│   ├── styles.css
│   ├── types.ts
│   ├── hero-object.ts
│   ├── spatial-motion.ts
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── LICENSE
```

---

## Content Management

Most of the portfolio content is separated from the interface and stored in:

```text
data/content.json
```

This includes:

* Personal introduction
* About section
* Skills
* Languages
* Education
* Experience
* Projects
* Certificates
* Awards
* Contact information
* Social links

This makes it possible to update the portfolio's content without having to rewrite the main interface.

---

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

Check your installation:

```bash
node -v
npm -v
```

### Clone the Repository

```bash
git clone https://github.com/sidhaaarth24/sidsphere.git
```

Move into the project directory:

```bash
cd sidsphere
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The development server will normally be available at:

```text
http://localhost:5173
```

---

## Build for Production

Create a production build with:

```bash
npm run build
```

The generated production files will be placed in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## Type Checking

Run TypeScript type checking with:

```bash
npm run typecheck
```

---

## Deployment

SidSphere is configured for deployment under:

```text
/sidsphere/
```

The Vite configuration contains:

```ts
base: '/sidsphere/'
```

This allows the project to be hosted from the GitHub Pages repository path.

### GitHub Pages

The live version of the portfolio is available at:

**https://sidhaaarth24.github.io/sidsphere/**

---

## Accessibility & UX

The project includes several considerations for usability:

* Responsive layouts
* Semantic HTML elements
* Keyboard-accessible interactions
* Accessible navigation labels
* Focus states
* Reduced-motion support
* Responsive mobile navigation
* Lazy-loaded project and certificate images

---

## Customization

To customize the portfolio, the primary content can be edited in:

```text
data/content.json
```

For visual changes, edit:

```text
src/styles.css
```

For application behavior and interface logic:

```text
src/main.ts
```

For TypeScript data structures:

```text
src/types.ts
```

---

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start the development server |
| `npm run build`     | Create a production build    |
| `npm run preview`   | Preview the production build |
| `npm run typecheck` | Run TypeScript type checking |

---

## Author

### Sidharth Kumar

Portfolio:
https://sidhaaarth24.github.io/sidsphere/

---

## License

This project is licensed under the terms specified in the repository's [`LICENSE`](LICENSE) file.

---
