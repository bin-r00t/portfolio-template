# David Chen - Professional Profile

A modern, professional personal profile website for a technology visionary, AI investor, and strategic advisor.

## Project Structure

```
user-profile/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # Interactive JavaScript (counters, scroll animations)
├── vick.jpg        # Profile image
└── README.md       # This file
```

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Fade-in effects on scroll, number counter animations
- **Modern Typography** - Using Plus Jakarta Sans font
- **Clean Architecture** - HTML, CSS, and JavaScript properly separated
- **Professional Layout** - Split-screen hero section with stats

## Customization

To customize this profile for your use:

1. **Personal Info** - Edit `index.html`:
   - Name, title, email (lines 37-40)
   - Location tags (lines 43-46)
   - Stats data attributes (lines 50, 54, 58, 62)

2. **Content Sections** - Update each section in `index.html`:
   - About Me (line 73)
   - Experience (line 113)
   - Achievements (line 147)
   - Investment Focus (line 187)
   - Contact (line 237)

3. **Profile Image** - Replace `vick.jpg` with your own photo

4. **Styling** - Modify `styles.css`:
   - Colors (lines 18-24)
   - Spacing and layout
   - Animation timing

5. **Contact Links** - Update social media links (lines 245, 248)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

No build process required - simply open `index.html` in a browser.

For local development with live reload:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with live-server)
npx live-server
```

## Credits

Design and development by Claude Code
Font: Plus Jakarta Sans (Google Fonts)
