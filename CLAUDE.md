# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A pure vanilla HTML/CSS/JavaScript personal profile website with no build process or framework dependencies. The site features scroll-based animations, number counters, responsive design, and a clean professional aesthetic.

## Key Design Rules

- **Icons**: Use inline SVG or heroicons/font-awesome icons - never emoji (except in the hero tags section where they are intentionally used)
- **UI Style**: Calm, professional, minimalism, black and white palette, avoid unnecessary borders
- **UX**: Well-designed animation styles - be mindful of element showup sequences (use `fade-in-up`, `delay-*` classes)

## Local Development

No build process required - simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js with live reload
npx live-server --port=8000

# PHP
php -S localhost:8000
```

## Architecture

### File Structure

```
index.html    # Main content (sections: hero, about, experience, achievements, investments, contact)
styles.css    # All styling with CSS variables for theming
script.js     # Interactive behaviors (counters, observers, navigation, mobile menu)
```

### CSS Organization (styles.css)

1. **Variables & Reset** (lines 1-32) - CSS custom properties for colors, fonts, spacing
2. **Header & Navigation** (lines 34-168) - Sticky header, logo with gradient underline, desktop/mobile nav
3. **Hero Section** (lines 170-273) - Split-screen avatar + stats layout
4. **Stats Animation** (lines 275-320) - Counter cards with `.show` trigger class
5. **Sections** (lines 322+) - About, timeline experience, achievements grid, investment cards, contact
6. **Responsive Media Queries** (breakpoints: <768px mobile, <480px small mobile)

### JavaScript Architecture (script.js)

1. **Counter Animation** (`animateCounter`) - Eased number counting from 0 to target
2. **Stats Observer** - IntersectionObserver triggers `.show` class and starts counters when stats visible
3. **Fade-In Observer** - IntersectionObserver adds `.show` to `.fade-in-up` elements on scroll
4. **Navigation System**:
   - Header shadow on scroll (`.scrolled` class)
   - Active section highlighting in nav
   - Smooth scroll to sections
   - Mobile menu toggle with hamburger animation

### Animation System

Elements animate on scroll using this pattern:
```html
<div class="fade-in-up delay-200">...</div>
```

Available delay classes: `delay-100`, `delay-200`, `delay-300`, `delay-400`, `delay-500` (adds 100-500ms stagger)

Stats section has special handling:
```html
<div class="stat-number" data-target="15">0</div>
<div class="stat-number" data-prefix="$" data-target="500" data-suffix="M+">0</div>
```

The counter automatically animates when scrolled into view.

### Adding New Sections

1. Add HTML in `index.html` with `id` attribute:
```html
<section id="new-section">
  <div class="container">
    <h2 class="section-title fade-in-up">Title</h2>
    <p class="section-subtitle fade-in-up delay-100">Subtitle</p>
    <div class="fade-in-up delay-200">Content</div>
  </div>
</section>
```

2. Add navigation link in header:
```html
<li><a href="#new-section">New Section</a></li>
```

3. Add mobile link in `.mobile-nav` dropdown

### CSS Variables for Theming

Located at top of `styles.css`:
```css
:root {
  --dark: #1a1a1a;      /* Primary text */
  --gray: #6b7280;      /* Secondary text */
  --light: #f9fafb;     /* Background accents */
  --white: #ffffff;     /* Main background */
  --border: #e5e7eb;    /* Subtle borders */
  --accent: #1a1a1a;    /* Interactive elements */
}
```