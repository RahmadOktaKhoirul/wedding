# Reference Study — Punakawan Digital Wedding Theme

**URL Studied:** https://hi.punakawandigital.net/gista-dedi/?to=Rahmad+Okta  
**Date:** October 2025  
**Theme Name:** PREMIUM VINTAGE

---

## 1. Color Palette

| Role | Color | Hex Code |
|------|-------|----------|
| **Primary** | Deep Burgundy/Maroon | `#853638` |
| **Primary Dark** | Darker Burgundy | `#6d0e0f` |
| **Primary Light** | Rose/Mauve | `#995555` |
| **Accent** | Soft Pink | `#fdbcbc` |
| **Text Primary** | Dark Brown | `#473025` |
| **Text Secondary** | Muted Brown | `#87414c` |
| **Background** | Dark Warm | `#2B1113` (similar to current project) |
| **Success** | Green | `#3D9A62` |
| **Warning** | Gold | `#d7a916` |
| **Error** | Red | `#d90a11` |

### Gradient Effect (Monogram)
```css
.gradient-text {
    background: linear-gradient(45deg, #995555, #6d0e0f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

---

## 2. Typography

### Google Fonts Used
- **Cormorant Garamond** — Elegant serif for body/headings
- **Cinzel** — Classic serif for formal headings
- **Caudex** — Serif for readable body text
- **Jura** — Modern sans-serif for clean labels
- **Montserrat** — Sans-serif for UI elements
- **Roboto/Roboto Slab** — Fallback fonts

### Custom Fonts (Decorative)
- **Italianno** — Script font for romantic headings
- **AlexBrush** — Brush script for signatures
- **Parisienne** — Elegant script
- **Playball** — Casual script
- **Greatness** — Decorative display font

### Type Scale Pattern
- **Monogram Initials:** 3rem (mobile: 1.5rem)
- **"The Wedding Of":** Medium display size
- **Couple Names:** Large, prominent
- **Body Text:** Standard readable size
- **Labels/Small:** 10px, uppercase, tracking-wide

---

## 3. Layout Structure

### Section Flow
1. **Cover/Popup Modal**
   - Monogram initials (G & D) with gradient text
   - "The Wedding Of" label
   - Couple names
   - "Dear: [Guest Name]" personalization
   - "Buka Undangan" button

2. **Hero Section (After Cover)**
   - Video background (autoplay, muted, playsinline)
   - Monogram overlay
   - Wedding date
   - Scroll indicator animation

3. **Main Content Sections**
   - Profile Mempelai (couple profiles)
   - Detail Acara (event details)
   - Love Story
   - Gallery
   - RSVP / Buku Tamu
   - Amplop Digital (wedding gift)
   - Closing/Thank You

### Desktop Layout
- **Sticky sidebar** on left with wedding info
- Main content in center column
- Hidden on mobile (responsive)

---

## 4. Animations & Motion

### Libraries Used
- **AOS (Animate On Scroll)** — Primary scroll animations
- **CSS Keyframes** — Custom animations

### Animation Types
| Effect | Usage |
|--------|-------|
| `fadeIn` | Section reveals |
| `fadeInUp` | Content sliding up |
| `fadeInDown` | Header/hero elements |
| `zoomIn` | Monogram, decorative elements |
| `wheel-up-down` | Scroll indicator |

### Animation Timing
- **Hero reveal delay:** 13.5 seconds (after video intro)
- **Staggered delays:** Sequential element reveals
- **Easing:** `ease-in-out`, `lease-in-cube`
- **Duration:** 2-2.5 seconds for smooth reveals

### Special Animations
```css
/* Scroll indicator */
@keyframes wheel-up-down {
  0% { opacity: 0; }
  30% { opacity: 1; }
  100% { transform: translateY(18px); opacity: 0; }
}

/* Subtle image float */
@keyframes wyKN {
  from { transform: rotate(10deg); }
  to { transform: rotate(5deg); }
}
```

---

## 5. UI Components

### Cover Modal
- Full-screen overlay
- Centered content with vertical stack
- Elegant button with border
- Guest name personalization via URL param `?to=Name`

### Monogram Section
- Two initials overlapping (absolute positioning)
- Gradient text effect
- Large decorative font

### Event Cards
- Clean card layout
- Icon integration (calendar, clock, map)
- Subtle background with backdrop-blur
- Copy-to-clipboard for addresses

### Gallery
- Grid layout (responsive)
- Image hover effects
- Lightbox/modal for full view

### RSVP Form
- Clean form inputs
- Status options: Hadir / Tidak hadir / Masih ragu
- Comment/message textarea

### Gift Section
- Bank account cards
- Copy button for account numbers
- Physical gift address

---

## 6. Special Features

### Personalization
```javascript
// URL parameter for guest name
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");
```

### Video Background
```html
<video autoplay muted playsinline>
  <source src="intro-video.mp4" type="video/mp4">
</video>
```

### Sound Control
- Mute/unmute toggle button
- Background music autoplay (muted initially)

### Responsive Design
- Mobile-first approach
- `100dvh` for full viewport height
- Touch-friendly interactions
- `viewport-fit: cover` for notch devices

---

## 7. Design Principles to Apply

### What to ADOPT
1. **Vintage color palette** — Deep burgundy, rose, warm browns
2. **Gradient text effect** — For monogram initials
3. **Elegant serif fonts** — Cormorant Garamond, Cinzel
4. **Script fonts** — For romantic headings (Italianno, AlexBrush)
5. **Smooth scroll animations** — fadeInUp, zoomIn with staggered delays
6. **Video background** — Hero section with autoplay intro
7. **Guest personalization** — URL parameter for names
8. **Clean section rhythm** — Consistent spacing and dividers
9. **Desktop sidebar** — Sticky navigation for wider screens
10. **Copy-to-clipboard** — For bank accounts and addresses

### What to IMPROVE from Reference
1. **Better typography hierarchy** — Use more font weights and sizes
2. **Richer animations** — More varied entrance effects
3. **Video intro** — Add cinematic opening video
4. **Gradient effects** — Apply to decorative elements
5. **Section transitions** — Smoother flow between sections

### What to AVOID
1. **Too many custom fonts** — Stick to 3-4 main fonts
2. **Excessive animation delays** — Keep under 3 seconds for UX
3. **Heavy video files** — Optimize for mobile loading
4. **Complex clip-paths** — Can hurt performance

---

## 8. Implementation Notes

### CSS Variables to Add
```css
:root {
  --color-primary: #853638;
  --color-primary-dark: #6d0e0f;
  --color-primary-light: #995555;
  --color-accent: #fdbcbc;
  --color-text: #473025;
  --color-text-secondary: #87414c;
  --gradient-monogram: linear-gradient(45deg, #995555, #6d0e0f);
}
```

### Google Fonts to Import
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
```

### Tailwind Config Extensions
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f2',
          100: '#fce4e4',
          200: '#fbcece',
          300: '#f7a8a8',
          400: '#f07575',
          500: '#e54545',
          600: '#d32626',
          700: '#b11c1c',
          800: '#931a1a',
          900: '#853638',
          950: '#473025',
        },
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
}
```

---

*Study completed: October 2025*  
*Reference: Punakawan Digital WeddingPress Theme*