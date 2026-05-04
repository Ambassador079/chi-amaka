# Chi Amaka 🍽️ — Food Landing Page

> Made with love, served hot ❤️

A high-converting, mobile-first landing page for **Chi Amaka**, a Nigerian food brand specializing in signature noodles and fluffy pancakes.

## ✨ Features

- **6 Sections**: Hero, Featured Products, Urgency Countdown, Social Proof, Final CTA, Footer
- **Framer Motion** animations: fade, slide, scale, hover, float, pulse
- **Live Countdown Timer** to create urgency (counts down to 10 PM)
- **Glassmorphism UI** with warm food colors (orange, red, cream, brown)
- **Sticky WhatsApp Float** button with pulsing animation + tooltip
- **Mobile-first** responsive design
- **Google Fonts**: Playfair Display + DM Sans + Caveat

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🗂️ Project Structure

```
chi-amaka/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glass navbar
│   │   ├── Hero.jsx            # Big hero with floating emojis
│   │   ├── FeaturedProducts.jsx # Noodles & Pancakes cards
│   │   ├── Urgency.jsx         # Countdown + urgency copy
│   │   ├── SocialProof.jsx     # Customer reviews
│   │   ├── FinalCTA.jsx        # Final banner
│   │   ├── Footer.jsx          # Footer
│   │   ├── WhatsAppFloat.jsx   # Floating WhatsApp button
│   │   └── ScrollReveal.jsx    # Reusable scroll animation
│   ├── App.jsx
│   ├── constants.js            # WhatsApp link, products, reviews
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🛠️ Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Google Fonts** (Playfair Display, DM Sans, Caveat)

## 📱 WhatsApp Integration

All CTAs link to: `https://wa.me/2349012333083`

Each button sends a pre-filled message so customers can order instantly.

---

*Chi Amaka — Made with love, served hot ❤️*
