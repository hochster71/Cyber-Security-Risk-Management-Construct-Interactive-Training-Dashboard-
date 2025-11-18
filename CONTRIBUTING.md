# Contributing to Dark Wolf Solutions Training Dashboard

Thank you for your interest in contributing to the Dark Wolf Solutions Cybersecurity Training Dashboard!

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Cyber-Security-Risk-Management-Construct-Interactive-Training-Dashboard-.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Make your changes and test thoroughly

## Code Standards

### TypeScript
- Use TypeScript for all new files
- Avoid using `any` type
- Define proper interfaces and types
- Use strict mode

### React
- Use functional components with hooks
- Follow React best practices
- Keep components focused and modular
- Use meaningful component and variable names

### Styling
- Use Tailwind CSS utility classes
- Follow the existing dark theme color scheme
- Ensure responsive design (mobile, tablet, desktop)
- Test on multiple screen sizes

### Code Quality
- Write clean, readable code
- Add comments for complex logic
- Follow existing code patterns
- Remove unused imports and variables

## Adding Training Modules

To add a new training module:

1. Edit `src/data/trainingData.ts`
2. Add a new module object with:
   ```typescript
   {
     id: 'unique-id',
     title: 'Module Title',
     description: 'Brief description',
     category: 'Category Name',
     difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
     duration: 'XX min',
     topics: ['Topic1', 'Topic2', ...],
     sources: [
       {
         title: 'Source Title',
         organization: 'Organization Name',
         url: 'https://...',
         year: 2024
       }
     ],
     content: `
       # Markdown content here
       ...
     `
   }
   ```

3. **Important**: All training content must include verified sources
4. Use markdown formatting for content
5. Include proper headings, lists, and code blocks

## Submitting Changes

1. Ensure all tests pass:
   ```bash
   npm run build
   ```

2. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: Add your feature description"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request with:
   - Clear description of changes
   - Screenshots for UI changes
   - References to related issues

## Commit Message Format

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: Add incident response training module
fix: Correct chart rendering on mobile devices
docs: Update README with deployment instructions
```

## Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Update documentation if needed
- Add screenshots for UI changes
- Ensure no console errors or warnings
- Test on multiple browsers
- Verify responsive design

## Reporting Issues

When reporting issues, include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and OS information
- Error messages or console output

## Feature Requests

For feature requests:
- Check if it already exists in issues
- Provide detailed description
- Explain use case and benefits
- Include mockups if applicable

## Code of Conduct

- Be respectful and professional
- Welcome newcomers
- Provide constructive feedback
- Focus on the best solution, not personal preferences

## Questions?

If you have questions about contributing, please open an issue with the `question` label.

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

---

Thank you for helping make this training platform better!
