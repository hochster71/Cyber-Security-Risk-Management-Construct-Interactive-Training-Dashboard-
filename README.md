# 🛡️ Cyber Security Risk Management Training Dashboard

A Progressive Web App (PWA) for interactive Cyber Security Risk Management training.

## Features

✅ **Progressive Web App (PWA)**
- Installable on desktop and mobile devices
- Works offline with service worker caching
- Fast loading and responsive design
- App-like experience with standalone display mode

📚 **Training Modules**
- Risk Assessment Fundamentals
- Threat Intelligence
- Security Controls & Mitigation
- Compliance & Frameworks
- Continuous Monitoring

🎯 **Interactive Features**
- Progress tracking with local storage
- Interactive assessment quiz
- Achievement system
- Real-time statistics
- Module completion tracking

🎨 **Modern UI/UX**
- Responsive design for all devices
- Clean, professional interface
- Smooth animations and transitions
- Intuitive navigation

## Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hochster71/Cyber-Security-Risk-Management-Construct-Interactive-Training-Dashboard-.git
   cd Cyber-Security-Risk-Management-Construct-Interactive-Training-Dashboard-
   ```

2. **Serve the application:**
   
   You can use any static file server. Here are some options:

   **Using Python:**
   ```bash
   python3 -m http.server 8080
   ```

   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 8080
   ```

   **Using PHP:**
   ```bash
   php -S localhost:8080
   ```

3. **Access the application:**
   
   Open your browser and navigate to: `http://localhost:8080`

### Installing as PWA

1. Open the application in a modern browser (Chrome, Edge, Firefox, Safari)
2. Look for the "Install App" button in the header
3. Click "Install" to add it to your device
4. The app will now work offline and appear like a native application

## Usage

### Dashboard
View your overall progress, completed modules, quiz scores, and time spent training.

### Training Modules
- Click on any module to expand and view the learning objectives
- Read through the content
- Click "Mark as Complete" when finished

### Assessment Quiz
- Answer all 5 questions about cyber security concepts
- Submit your answers to get scored
- Achieve 80% or higher to unlock the "Quiz Expert" achievement

### Progress Tracking
- All progress is saved locally in your browser
- View detailed completion status for each module
- Track unlocked achievements

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript** - Vanilla JS for interactivity
- **Service Worker** - Offline functionality and caching
- **Web App Manifest** - PWA configuration
- **LocalStorage API** - Progress persistence

## PWA Features

### Offline Support
The application caches all resources and works completely offline after the first visit.

### App Installation
Users can install the app on their devices for a native app-like experience.

### Responsive Design
Optimized for all screen sizes from mobile phones to desktop computers.

## Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari (iOS 11.3+)
- ✅ Opera

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Application styles
├── app.js              # Application logic
├── service-worker.js   # Service worker for PWA
├── manifest.json       # PWA manifest
├── icons/              # App icons
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
└── README.md           # This file
```

## Development

### Adding New Modules
Edit `index.html` to add new training modules following the existing structure.

### Modifying Quiz Questions
Update the quiz questions in `index.html` and the answer key in `app.js`.

### Customizing Styles
Modify `styles.css` - CSS variables are defined in `:root` for easy theming.

### Updating Service Worker
When making changes, update the `CACHE_NAME` version in `service-worker.js` to force cache updates.

## Security Considerations

- All data is stored locally in the browser
- No server-side processing or data transmission
- HTTPS recommended for production deployment
- Content Security Policy headers recommended

## Deployment

### GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select branch and root folder
4. Access at: `https://yourusername.github.io/repository-name/`

### Other Hosting
Deploy to any static hosting service:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront
- Azure Static Web Apps

**Note:** PWAs require HTTPS in production (except localhost).

## License

This project is licensed under the terms included in the LICENSE file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an issue in the GitHub repository.

---

**Made with 🛡️ for Cyber Security Education**
