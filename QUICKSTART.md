# Quick Start Guide

Welcome to the Dark Wolf Solutions Cybersecurity Training Dashboard! This guide will help you get started quickly.

## For Users

### Accessing the Dashboard

1. **Open the Application**
   - Navigate to the deployed URL or run locally
   - The dashboard will load automatically

2. **Explore the Interface**
   - **Dashboard Tab**: View security metrics and featured modules
   - **Training Tab**: Browse all available training modules
   - **Analytics Tab**: Examine detailed security analytics

### Using Training Modules

1. **Browse Modules**
   - Scroll through the training cards
   - Check the difficulty level (Beginner/Intermediate/Advanced)
   - Note the estimated duration
   - Review the topic tags

2. **Open a Module**
   - Click on any training card
   - A full-screen modal will open
   - Read through the comprehensive content
   - Click external links to access source materials

3. **Navigate Content**
   - Scroll through the training material
   - Review the structured headings and sections
   - Check the references at the bottom
   - Click the X button to close when done

### Understanding the Dashboard

#### Security Metrics
- **Security Score**: Overall security posture (higher is better)
- **Threats Detected**: Number of identified threats (lower is better)
- **Vulnerabilities**: Known security vulnerabilities (lower is better)
- **Compliance Rate**: Framework compliance percentage (higher is better)

#### Analytics Charts
- **Threat Trends**: 12-month view of threat activity
- **Attack Types**: Distribution of different attack categories
- **Compliance Status**: Performance across security frameworks
- **Recent Activity**: Latest 6 months of security events

### Mobile Usage

On mobile devices:
1. Tap the menu icon (☰) in the top right
2. Select your desired tab
3. Swipe through content
4. Tap modules to expand them
5. Use the X button to close modals

## For Developers

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/hochster71/Cyber-Security-Risk-Management-Construct-Interactive-Training-Dashboard-.git

# Navigate to directory
cd Cyber-Security-Risk-Management-Construct-Interactive-Training-Dashboard-

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Project Structure Overview

```
src/
├── components/       # React components
│   ├── MetricCard.tsx
│   ├── TrainingCard.tsx
│   ├── ChartComponent.tsx
│   └── ModuleDetail.tsx
├── data/            # Training modules & data
│   └── trainingData.ts
├── types/           # TypeScript definitions
│   └── index.ts
├── App.tsx          # Main application
└── main.tsx         # Entry point
```

### Key Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm test         # Run tests (when added)
```

### Making Changes

1. **Edit Training Content**
   - Open `src/data/trainingData.ts`
   - Add/modify modules in the array
   - Include proper citations

2. **Customize Styling**
   - Edit `tailwind.config.ts` for theme colors
   - Modify `src/index.css` for global styles

3. **Add Components**
   - Create new files in `src/components/`
   - Import and use in `App.tsx`

### Environment Setup

Recommended VS Code Extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## Training Module Guide

### Available Modules

1. **Introduction to Cyber Risk Management** (Beginner, 45 min)
   - Risk assessment fundamentals
   - NIST framework overview
   - Risk treatment strategies

2. **Threat Analysis and Intelligence** (Intermediate, 60 min)
   - Threat intelligence lifecycle
   - MITRE ATT&CK framework
   - APT analysis

3. **Incident Response and Forensics** (Advanced, 90 min)
   - Complete IR lifecycle
   - Digital forensics principles
   - Evidence handling

4. **Secure Coding and Application Security** (Intermediate, 75 min)
   - OWASP Top 10
   - Secure SDLC
   - Security testing

5. **Cloud Security and Zero Trust** (Advanced, 80 min)
   - Cloud security model
   - Zero trust principles
   - Container security

### Learning Path Recommendations

**For Beginners:**
1. Start with "Introduction to Cyber Risk Management"
2. Move to "Threat Analysis and Intelligence"
3. Then try "Secure Coding and Application Security"

**For Intermediate Users:**
1. Review "Threat Analysis and Intelligence"
2. Complete "Secure Coding and Application Security"
3. Advance to "Incident Response and Forensics"

**For Advanced Users:**
1. Focus on "Incident Response and Forensics"
2. Master "Cloud Security and Zero Trust"
3. Review all modules for comprehensive understanding

## Tips for Best Experience

### General Usage
- Use a modern browser (Chrome, Firefox, Safari, Edge)
- Enable JavaScript
- Use a screen with at least 1024px width for best experience
- Take breaks between modules (they're comprehensive!)

### Learning Tips
- Take notes while reading modules
- Click through to source materials
- Practice concepts in a lab environment
- Revisit modules for reinforcement
- Share knowledge with your team

### Technical Tips
- Clear browser cache if experiencing issues
- Disable ad blockers if content doesn't load
- Use incognito mode to test fresh session
- Report issues via GitHub Issues

## Troubleshooting

### Common Issues

**Dashboard not loading:**
- Check internet connection
- Clear browser cache
- Try a different browser
- Disable browser extensions

**Charts not displaying:**
- Ensure JavaScript is enabled
- Update your browser
- Check browser console for errors

**Module content not showing:**
- Wait for full page load
- Refresh the page
- Try a different module

**Mobile display issues:**
- Rotate device to landscape
- Use two-finger zoom
- Update mobile browser

## Getting Help

- **Documentation**: Check README.md and FEATURES.md
- **Issues**: Report bugs on GitHub Issues
- **Questions**: Create a discussion on GitHub
- **Updates**: Watch the repository for updates

## Next Steps

After getting familiar with the platform:
1. Complete all training modules
2. Review the analytics regularly
3. Share the platform with your team
4. Contribute improvements (see CONTRIBUTING.md)
5. Deploy your own instance (see DEPLOYMENT.md)

---

Happy Learning! 🎓🔒

**Dark Wolf Solutions - Advanced Cybersecurity Training**
