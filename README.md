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
# Dark Wolf Solutions - Advanced Cybersecurity Training Dashboard

An advanced, interactive, AI-powered cybersecurity risk management training platform developed by Michael Hoch for Dark Wolf Solutions. This state-of-the-art dashboard provides comprehensive training modules with verified sources, real-time analytics, and cutting-edge visualization technologies.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)

## 🚀 Features

### Advanced Interactive Training
- **Comprehensive Cybersecurity Modules**: In-depth training on risk management, threat analysis, incident response, secure coding, and cloud security
- **Verified Source Citations**: Every training module includes references to industry-standard frameworks (NIST, ISO, SANS, OWASP, etc.)
- **Interactive Learning Experience**: Engaging, hands-on training materials with real-world scenarios
- **Multiple Difficulty Levels**: Content tailored for beginners, intermediate, and advanced learners

### Real-Time Analytics & Visualization
- **Security Metrics Dashboard**: Live monitoring of security scores, threats detected, vulnerabilities, and compliance rates
- **Advanced Data Visualization**: Powered by Recharts with interactive charts including:
  - Threat trend analysis (area charts)
  - Attack type distribution (pie charts)
  - Compliance framework status (bar charts)
  - Real-time security metrics

### Modern Dark Theme UI
- **Professional Dark Interface**: Optimized for extended training sessions with reduced eye strain
- **Glassmorphism Design**: Modern UI with glass-card effects and backdrop blur
- **Cyber Grid Background**: Futuristic grid pattern for enhanced visual appeal
- **Gradient Accents**: Dynamic gradient text and animations
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile devices

### AI-Powered Capabilities
- **Intelligent Content Organization**: Smart categorization and tagging of training materials
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Modern Web Technologies**: Built with the latest React 19, TypeScript 5, and Vite 7

## 🛠️ Technology Stack

### Core Technologies
- **React 19.2.0**: Latest version with improved performance and features
- **TypeScript 5.9.3**: Type-safe development with advanced type checking
- **Vite 7.2.2**: Lightning-fast build tool and development server
- **Tailwind CSS 4.1.17**: Modern utility-first CSS framework with custom theme

### Visualization & UI Libraries
- **Recharts 3.4.1**: Advanced charting library for data visualization
- **Lucide React 0.553.0**: Beautiful, consistent icon set
- **Framer Motion 12.23.24**: Powerful animation library
- **React Markdown 10.1.0**: Render markdown content with custom styling
- **Headless UI 2.2.9**: Unstyled, accessible UI components

### Development Tools
- **PostCSS**: CSS processing with Autoprefixer
- **ESLint**: Code quality and consistency
- **TypeScript Compiler**: Static type checking

## 📚 Training Modules

### 1. Introduction to Cyber Risk Management
- Risk Assessment fundamentals
- NIST Framework Core Functions
- Risk Treatment Strategies
- **Sources**: NIST Cybersecurity Framework, ISO/IEC 27005:2022

### 2. Threat Analysis and Intelligence
- Cyber Threat Intelligence Lifecycle
- MITRE ATT&CK Framework
- Advanced Persistent Threats (APTs)
- **Sources**: MITRE ATT&CK, SANS Institute CTI Guide

### 3. Incident Response and Forensics
- Complete IR Lifecycle (Preparation through Post-Incident)
- Digital Forensics Principles
- Chain of Custody and Evidence Collection
- **Sources**: NIST SP 800-61 Rev. 2, SANS IR Process

### 4. Secure Coding and Application Security
- OWASP Top 10 Web Application Security Risks
- Secure Development Lifecycle (SSDLC)
- Security Testing (SAST, DAST)
- **Sources**: OWASP Top 10 2021, NIST SSDF

### 5. Cloud Security and Zero Trust Architecture
- Shared Responsibility Model
- Zero Trust Principles and Implementation
- Container and Kubernetes Security
- **Sources**: NIST SP 800-207, Cloud Security Alliance

## 🚦 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
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
2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── MetricCard.tsx   # Security metrics display
│   │   ├── TrainingCard.tsx # Training module cards
│   │   ├── ChartComponent.tsx # Data visualization charts
│   │   └── ModuleDetail.tsx # Detailed module view
│   ├── data/
│   │   └── trainingData.ts  # Training modules and analytics data
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind config
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Project dependencies and scripts
```

## 🎨 Customization

### Color Scheme
The dark theme uses a custom color palette defined in `tailwind.config.ts`:
- **Dark Backgrounds**: #0a0a0a, #1a1a1a, #2a2a2a
- **Accent Colors**: Cyan (#00d4ff), Purple (#7c3aed), Green (#10b981), Orange (#f59e0b), Red (#ef4444)

### Adding Training Modules
Edit `src/data/trainingData.ts` to add new training modules with:
- Title, description, and category
- Difficulty level and duration
- Topics covered
- Source citations
- Markdown-formatted content

### Customizing Charts
Modify `src/components/ChartComponent.tsx` to add new chart types or customize existing visualizations.

## 🔒 Security Features

- **Source Citations**: All training content includes verified references to industry standards
- **Type Safety**: Full TypeScript implementation for code reliability
- **Secure Dependencies**: Regular updates and security audits
- **Best Practices**: Following OWASP secure coding guidelines

## 📊 Analytics Dashboard

The dashboard provides real-time metrics including:
- **Security Score**: Overall security posture rating
- **Threats Detected**: Number of identified security threats
- **Vulnerabilities**: Count of known vulnerabilities
- **Compliance Rate**: Percentage of compliance with security frameworks

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

ISC License - See LICENSE file for details

## 👨‍💻 Author

**Michael Hoch**
- Company: Dark Wolf Solutions
- Project: Advanced Cybersecurity Training Dashboard

## 🙏 Acknowledgments

This training platform incorporates knowledge and best practices from:
- **NIST** (National Institute of Standards and Technology)
- **SANS Institute**
- **MITRE Corporation**
- **OWASP** (Open Web Application Security Project)
- **ISO/IEC** (International Organization for Standardization)
- **Cloud Security Alliance**

All training materials include proper citations and references to these authoritative sources.

## 🔄 Updates and Maintenance

The platform is regularly updated with:
- Latest cybersecurity frameworks and standards
- New training modules and content
- Security patches and dependency updates
- Performance improvements and optimizations

## 📧 Support

For questions, issues, or contributions, please contact Dark Wolf Solutions.

---

**Built with ❤️ using cutting-edge web technologies | Dark Wolf Solutions © 2024**
