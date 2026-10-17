# DESIGN.md — Visual System Specification

## Brand
- **Name:** The Wedding of Rahmad & Renata
- **Theme:** Premium Vintage — Elegant, Romantic, Timeless
- **Voice:** Elegant, Warm, Romantic
- **Anti-patterns:** Neon colors, overly modern/corporate look, harsh contrasts, cartoonish elements

---

## Color System

### Primary Palette (Vintage Burgundy)
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Deep Burgundy | `#853638` | Buttons, links, active states, headings |
| **Primary Dark** | Darker Burgundy | `#6d0e0f` | Hover states, emphasis |
| **Primary Light** | Rose/Mauve | `#995555` | Secondary accents, gradients |
| **On Primary** | Cream White | `#FFF8F0` | Text on primary backgrounds |

### Accent Colors
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Accent** | Soft Pink | `#fdbcbc` | Highlights, badges, subtle accents |
| **Accent Dark** | Muted Rose | `#e8a5a5` | Hover on accent elements |
| **Gold** | Antique Gold | `#d7a916` | Special highlights, decorative |

### Background & Surface
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background** | Dark Warm | `#2B1113` | Page background |
| **Background Light** | Warm Cream | `#FFF8F0` | Light sections, cards |
| **Surface** | Translucent White | `rgba(255, 248, 240, 0.05)` | Glass cards, overlays |
| **Card** | Semi-transparent | `rgba(255, 248, 240, 0.08)` | Card backgrounds |

### Text Colors
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Text Primary** | Dark Brown | `#473025` | Body text on light bg |
| **Text on Dark** | Cream | `#FFF8F0` | Body text on dark bg |
| **Text Secondary** | Muted Brown | `#87414c` | Captions, labels |
| **Text Muted** | Soft Gray | `rgba(255, 248, 240, 0.6)` | Secondary text on dark |

### Gradient
```css
/* Monogram gradient */
.gradient-monogram {
  background: linear-gradient(45deg, #995555, #6d0e0f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Section divider gradient */
.gradient-divider {
  background: linear-gradient(to right, transparent, #853638, transparent);
}
```

### Dark Mode (Default for this project)
```css
:root {
  --bg-primary: #2B1113;
  --bg-surface: rgba(255, 248, 240, 0.05);
  --bg-card: rgba(255, 248, 240, 0.08);
  --text-primary: #FFF8F0;
  --text-secondary: rgba(255, 248, 240, 0.7);
  --text-muted: rgba(255, 248, 240, 0.5);
  --accent-primary: #853638;
  --accent-light: #fdbcbc;
  --border: rgba(255, 248, 240, 0.1);
}
```

---

## Typography

### Font Stack
```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

/* Font Families */
--font-display: 'Cinzel', serif;        /* Headings, formal text */
--font-body: 'Cormorant Garamond', serif; /* Body, readable text */
--font-sans: 'Montserrat', sans-serif;   /* UI elements, labels */
```

### Type Scale
| Element | Font | Weight | Size | Tracking | Line Height |
|---------|------|--------|------|----------|-------------|
| **Monogram** | Cinzel | 400 | 4rem (64px) | 0.05em | 1.1 |
| **Display H1** | Cinzel | 500 | 2.5rem (40px) | 0.1em | 1.2 |
| **H1** | Cinzel | 500 | 2rem (32px) | 0.08em | 1.3 |
| **H2** | Cinzel | 500 | 1.5rem (24px) | 0.06em | 1.4 |
| **H3** | Cinzel | 600 | 1.25rem (20px) | 0.04em | 1.4 |
| **Body Large** | Cormorant Garamond | 400 | 1.25rem (20px) | 0.02em | 1.7 |
| **Body** | Cormorant Garamond | 400 | 1.125rem (18px) | 0.01em | 1.7 |
| **Body Small** | Cormorant Garamond | 400 | 1rem (16px) | 0.01em | 1.6 |
| **Label** | Montserrat | 500 | 0.75rem (12px) | 0.15em | 1.5 |
| **Caption** | Montserrat | 400 | 0.625rem (10px) | 0.2em | 1.5 |

### Responsive Scale
```css
/* Mobile adjustments */
@media (max-width: 640px) {
  --size-monogram: 2.5rem;    /* 40px */
  --size-display: 1.75rem;    /* 28px */
  --size-h1: 1.5rem;          /* 24px */
  --size-h2: 1.25rem;         /* 20px */
}
```

### Max Line Length
- Body text: `65ch` maximum for readability
- Center-aligned text: `45ch` maximum

---

## Spacing

### Base Unit: `4px`

### Scale
| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Small gaps |
| `space-3` | 12px | Component internal padding |
| `space-4` | 16px | Standard gap |
| `space-6` | 24px | Medium gap |
| `space-8` | 32px | Large gap |
| `space-12` | 48px | Section internal spacing |
| `space-16` | 64px | Section padding |
| `space-20` | 80px | Large section padding |
| `space-24` | 96px | Hero section padding |

### Section Spacing
```css
.section {
  padding-top: 5rem;    /* 80px */
  padding-bottom: 5rem; /* 80px */
}

@media (min-width: 768px) {
  .section {
    padding-top: 7rem;    /* 112px */
    padding-bottom: 7rem; /* 112px */
  }
}
```

### Content Width
- Mobile: `100%`
- Tablet: `max-w-xl` (576px)
- Desktop: `max-w-2xl` (672px)
- Full-width sections: `max-w-4xl` (896px)

---

## Grid & Layout

### Breakpoints
| Name | Width | Usage |
|------|-------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Standard desktops |

### Container
```css
.container {
  width: 100%;
  max-width: 576px; /* max-w-xl */
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}
```

### Desktop Sidebar (Optional)
```css
@media (min-width: 1024px) {
  .layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 2rem;
  }
  
  .sidebar {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }
}
```

---

## Border Radius

### Scale
| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Subtle rounding |
| `rounded` | 6px | Buttons, inputs |
| `rounded-lg` | 8px | Cards, containers |
| `rounded-xl` | 12px | Large cards |
| `rounded-2xl` | 16px | Modal, hero elements |
| `rounded-full` | 9999px | Avatars, badges |

### Consistent Usage
- **Buttons:** `rounded-lg` (8px)
- **Cards:** `rounded-xl` (12px)
- **Images:** `rounded-2xl` (16px)
- **Inputs:** `rounded-lg` (8px)
- **Badges/Tags:** `rounded-full`

---

## Elevation (Shadows)

### Shadow Scale
```css
/* Level 0 — Flat */
.shadow-none { box-shadow: none; }

/* Level 1 — Subtle (cards) */
.shadow-sm {
  box-shadow: 0 1px 2px rgba(43, 17, 19, 0.3);
}

/* Level 2 — Medium (elevated cards) */
.shadow-md {
  box-shadow: 0 4px 6px rgba(43, 17, 19, 0.4);
}

/* Level 3 — High (modals) */
.shadow-lg {
  box-shadow: 0 10px 15px rgba(43, 17, 19, 0.5);
}

/* Level 4 — Dramatic (hero elements) */
.shadow-xl {
  box-shadow: 0 20px 25px rgba(43, 17, 19, 0.6);
}
```

### Glass Effect
```css
.glass {
  background: rgba(255, 248, 240, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 248, 240, 0.1);
}
```

---

## Motion & Animation

### Timing Table
| Animation | Duration | Easing | Property |
|-----------|----------|--------|----------|
| **Entrance** | 700ms | `ease: [0.22, 1, 0.36, 1]` | opacity, transform |
| **Exit** | 400ms | `ease: [0.36, 0, 0.22, 1]` | opacity, transform |
| **Hover** | 200ms | `ease-out` | transform, shadow |
| **Active/Press** | 100ms | `ease-in` | scale(0.98) |
| **Stagger** | 80ms | — | delay between children |
| **Scroll Reveal** | 700ms | `ease: [0.22, 1, 0.36, 1]` | whileInView |

### Entrance Animations (motion/react)
```tsx
// Fade up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
/>

// Zoom in
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
/>

// Stagger children
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: index * 0.08 }}
/>
```

### Special Animations
```css
/* Scroll indicator pulse */
@keyframes scroll-indicator {
  0%, 100% { opacity: 0; transform: translateY(0); }
  30% { opacity: 1; }
  100% { opacity: 0; transform: translateY(18px); }
}

/* Subtle float */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Gradient shimmer */
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Patterns

### Cover Modal
- Full-screen overlay with dark background
- Centered content with vertical stack
- Monogram initials with gradient effect
- Elegant button with border animation
- Guest name personalization

### Hero Section
- Video background (autoplay, muted, playsinline)
- Overlay gradient (dark at bottom)
- Monogram and names centered
- Scroll indicator at bottom

### Section Headers
```tsx
<div className="flex items-center gap-3">
  <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#853638]" />
  <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#fdbcbc]">
    Section Label
  </p>
  <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#853638]" />
</div>
```

### Cards (Glass Morphism)
```tsx
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
  {/* Card content */}
</div>
```

### Buttons
```tsx
/* Primary Button */
<button className="px-8 py-3 bg-[#853638] text-[#FFF8F0] rounded-lg 
  font-sans text-sm uppercase tracking-widest
  hover:bg-[#6d0e0f] transition-colors duration-200">
  Buka Undangan
</button>

/* Ghost Button */
<button className="px-8 py-3 border border-[#853638] text-[#FFF8F0] rounded-lg 
  font-sans text-sm uppercase tracking-widest
  hover:bg-[#853638]/20 transition-colors duration-200">
  Lihat Detail
</button>
```

### Divider Ornament
```tsx
<div className="flex items-center gap-4 my-8">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#853638]/30" />
  <svg className="w-4 h-4 text-[#853638]" viewBox="0 0 24 24" fill="currentColor">
    {/* Diamond or flower ornament */}
  </svg>
  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#853638]/30" />
</div>
```

---

## Image Style

### Photography Treatment
- **Aspect Ratios:**
  - Hero/Cover: 9:16 (portrait) or 16:9 (landscape)
  - Gallery: 4:3 or 1:1
  - Profile: 3:4 (portrait)
  - Thumbnails: 1:1

- **Treatment:**
  - Subtle vignette overlay
  - Warm color grading
  - Soft edges (rounded corners)
  - No harsh borders

### Image Overlay
```css
.image-overlay {
  position: relative;
}

.image-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(43, 17, 19, 0.8) 100%
  );
}
```

---

## Accessibility

### Color Contrast
- Body text on dark bg: `#FFF8F0` on `#2B1113` = **12.5:1** ✓
- Accent text: `#fdbcbc` on `#2B1113` = **9.2:1** ✓
- Muted text: `rgba(255,248,240,0.6)` on `#2B1113` = **7.5:1** ✓

### Focus Indicators
```css
:focus-visible {
  outline: 2px solid #853638;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Touch Targets
- Minimum size: `44px × 44px`
- Button padding: `py-3 px-6` minimum

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Landmark regions (header, main, footer)
- Alt text for all images
- ARIA labels for interactive elements

---

## CSS Variables (Tailwind v4)

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-burgundy-50: #fdf2f2;
  --color-burgundy-100: #fce4e4;
  --color-burgundy-200: #fbcece;
  --color-burgundy-300: #f7a8a8;
  --color-burgundy-400: #f07575;
  --color-burgundy-500: #e54545;
  --color-burgundy-600: #d32626;
  --color-burgundy-700: #b11c1c;
  --color-burgundy-800: #931a1a;
  --color-burgundy-900: #853638;
  --color-burgundy-950: #473025;
  
  /* Semantic Colors */
  --color-primary: #853638;
  --color-primary-dark: #6d0e0f;
  --color-primary-light: #995555;
  --color-accent: #fdbcbc;
  --color-gold: #d7a916;
  
  /* Fonts */
  --font-display: 'Cinzel', serif;
  --font-body: 'Cormorant Garamond', serif;
  --font-sans: 'Montserrat', sans-serif;
}
```

---

*Design System Version: 1.0*  
*Theme: Premium Vintage Wedding*  
*Last Updated: October 2025*