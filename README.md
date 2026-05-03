# ✦ Komal — Portfolio v1

My first personal portfolio — built to be fast, responsive, and actually fun to scroll through.

> *"Code is my canvas, design is my color."*

🔗 **[Live Site →](https://your-portfolio-link.vercel.app)** &nbsp;|&nbsp; 🎨 **[Portfolio v2 →](https://portfolio2-0-woad-theta.vercel.app)**

---

## 🖼️ Preview

| Light Mode | Dark Mode |
|---|---|
| ![Light](https://github.com/user-attachments/assets/294ecc2f-355e-41b0-8b02-17c31077113e) | ![Dark](https://github.com/user-attachments/assets/155b6aa9-c14c-4cf1-835e-765d39b5fecf) |

---

## ✨ What Makes It Different

This isn't a template clone. Every section has something interactive:

- **Hero** — parallax background text that moves with scroll, magazine-style cutout layout
- **Featured Project** — full autoplay video demo of Uamore with live + GitHub links
- **Skills** — live typewriter animation cycling through code snippets in a fake terminal
- **Projects Gallery** — filterable grid (Frontend / Full-Stack / Experiments) with hover-reveal links
- **Journey Timeline** — hover to expand milestone details, alternating left-right layout
- **Light & Dark Mode** — full theme toggle with smooth transitions throughout

---

## 🛠️ Tech Stack

```
React 18 + TypeScript    →  Component architecture & type safety
Vite                     →  Fast dev server & optimised builds
Tailwind CSS             →  Utility-first styling with custom tokens
Framer Motion            →  Page animations & smooth transitions
React Router DOM         →  Client-side routing
Lucide React             →  Clean, consistent icons
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Parallax hero with scroll-reactive background
│   ├── FeaturedProject.tsx   # Uamore video showcase
│   ├── ProjectsGallery.tsx   # Filterable project grid
│   ├── About.tsx             # Stats + illustration layout
│   ├── Skills.tsx            # Typewriter terminal + skill cards
│   ├── Timeline.tsx          # Hover-expand journey timeline
│   ├── Contact.tsx           # Social links + contact form
│   ├── Header.tsx            # Nav with theme toggle
│   └── Footer.tsx
├── contexts/
│   └── ThemeContext.tsx      # Global dark/light mode state
├── assets/                  # Project screenshots, illustrations
└── styles/
    └── animations.css        # Custom keyframe animations
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/Komal290106/Portfolio.git
cd Portfolio/project
npm install
npm run dev
```

Open `http://localhost:5173` — hot reload included.

---

## 📦 Projects Showcased

| Project | Category | Stack |
|---|---|---|
| Uamore | Frontend | React, TypeScript, Framer Motion |
| Masala Tales | Frontend | React, TypeScript, Tailwind |
| CodeSpline | Experiments | React, Spline 3D, Tailwind |
| Nimbus Keyboards | Experiments | Next.js, Three.js, GSAP |
| Ghibli Fanpage | Frontend | HTML, CSS |
| Netflix Clone | Full-Stack | React, Firebase |

---

## 🌱 What I'd Do Differently Now

This was v1 — built while still learning. Looking back:
- Would use `useMemo` on scroll handlers to avoid unnecessary recalculates
- Would convert all images to WebP for better Lighthouse scores
- The autoplay video on FeaturedProject hurts mobile LCP — would switch to play-on-hover

These lessons went directly into **[Portfolio v2](https://portfolio2-0-woad-theta.vercel.app)** 🚀

---

Made with curiosity and too many browser tabs open.  
— **[Komal Kaur Dhillon](https://github.com/Komal290106)**
