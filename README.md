# Morpheus - Matrix-Themed Product Website

A fully functional, Matrix-themed product website for GitHub Pages featuring a dark hacker aesthetic, green glowing effects, and interactive elements.

## 🚀 Features

- **Matrix-inspired design** with green neon effects and particle animations
- **Interactive terminal simulator** with custom commands
- **Smooth animations** including glitch effects, falling pills, and matrix rain
- **Stripe integration ready** for payment processing
- **Fully responsive** design for all devices
- **No cookies or tracking** - privacy-focused
- **GitHub Pages compatible** - pure static files

## 📁 Required Images

Add the following images to the `./images/` folder:

1. **morpheus-device.png** - Main product image for the showcase section
2. **red-pill-hand.png** - Hand holding a red pill (left side)
3. **blue-pill-hand.png** - Hand holding a blue pill (right side)
4. **feature-linux.png** - Icon for Linux feature (80x80px recommended)
5. **feature-scripts.png** - Icon for scriptable feature (80x80px recommended)
6. **feature-tools.png** - Icon for preloaded tools feature (80x80px recommended)
7. **feature-custom.png** - Icon for customization feature (80x80px recommended)

### Image Guidelines:
- Use transparent PNGs for best results
- Product image should be high quality (500px+ width)
- Pill images work best around 300px width
- Feature icons should be 80x80px
- Keep file sizes optimized for web

## 🛠️ Setup Instructions

1. **Clone or download** this repository to your local machine
2. **Add your images** to the `./images/` folder as specified above
3. **Update Stripe integration**:
   - Open `script.js`
   - Find the `initStripe()` function
   - Replace `'https://buy.stripe.com/your-payment-link-here'` with your actual Stripe Payment Link
4. **Deploy to GitHub Pages**:
   - Push to your GitHub repository
   - Go to Settings > Pages
   - Select source branch and save
   - Your site will be available at `https://[username].github.io/[repository-name]/`

## 💳 Stripe Integration

The site uses Stripe Payment Links for secure payment processing:

1. Create a Payment Link in your Stripe Dashboard
2. Copy the payment link URL
3. Update the `stripePaymentLink` variable in `script.js`
4. Uncomment the `window.open()` line to enable purchases

## 🎮 Terminal Commands

The interactive terminal supports these commands:
- `help` - Show available commands
- `whoami` - Discover your identity
- `system` - Display system information
- `hack` - Initiate hack sequence
- `clear` - Clear terminal output
- `matrix` - Famous Matrix quote
- `morpheus` - Morpheus wisdom

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --matrix-green: #00ff00;
    --matrix-dark-green: #008f00;
    --matrix-red: #ff0000;
    --matrix-blue: #0080ff;
    --bg-black: #000000;
    --bg-dark: #0a0a0a;
}
```

### Animations
- Particle count: Edit `particleCount` in `script.js`
- Animation speeds: Adjust duration values in CSS
- Matrix rain density: Modify `columnCount` calculation

## 📱 Mobile Responsive

The site includes:
- Mobile menu toggle
- Responsive grid layouts
- Touch-friendly buttons
- Optimized animations for performance

## 🔒 Privacy & Security

- No cookies or tracking scripts
- Contact form is client-side only (implement server-side handling as needed)
- Hosted on GitHub Pages for security
- Payment processing handled by Stripe

## 📄 Pages Included

- **index.html** - Main landing page with all sections
- **contact.html** - Contact form page
- **privacy.html** - Privacy policy
- **terms.html** - Terms of service

## 🌟 Special Effects

- **Scanline effect** - Retro CRT monitor effect
- **Glitch text** - Hover over titles for enhanced glitch
- **Particle burst** - Click any button for particle explosion
- **Falling pills** - Red and blue pills rain in docs section
- **Matrix rain** - Binary rain effect in hero section

## 📝 License

This project is open source. Feel free to modify and use for your own projects.

---

**Remember**: There is no spoon... but there is awesome code! 🥄✨
