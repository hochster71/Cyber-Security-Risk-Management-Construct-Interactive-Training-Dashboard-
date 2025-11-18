# Deployment Guide

This guide provides instructions for deploying the Dark Wolf Solutions Cybersecurity Training Dashboard to various platforms.

## Vercel Deployment (Recommended)

Vercel provides the easiest deployment for Vite applications.

### Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy via Git Integration

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite configuration
5. Click "Deploy"

### Build Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Netlify Deployment

### Deploy with Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Deploy via Git Integration

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## GitHub Pages Deployment

1. Install gh-pages package:
   ```bash
   npm install -D gh-pages
   ```

2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. Update vite.config.ts with base path:
   ```typescript
   export default defineConfig({
     base: '/Cyber-Security-Risk-Management-Construct-Interactive-Training-Dashboard-/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Docker Deployment

### Create Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Create nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Build and Run

```bash
docker build -t darkwolf-training-dashboard .
docker run -p 80:80 darkwolf-training-dashboard
```

## AWS S3 + CloudFront

1. Build the project:
   ```bash
   npm run build
   ```

2. Create S3 bucket and enable static website hosting

3. Upload dist folder contents to S3:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

4. Create CloudFront distribution pointing to S3 bucket

5. Configure CloudFront error pages to redirect to index.html

## Environment Variables

For production deployments, you may want to configure:

```env
# Optional: API endpoints for future integrations
VITE_API_URL=https://api.darkwolfsolutions.com
VITE_ENV=production
```

## Performance Optimization

The build is already optimized with:
- Code splitting
- Minification
- Tree shaking
- Asset optimization

For additional optimization:
- Enable gzip/brotli compression on your server
- Configure CDN caching
- Use HTTP/2 or HTTP/3
- Implement service workers for offline functionality

## SSL/HTTPS

For production deployments:
- Use Let's Encrypt for free SSL certificates
- Vercel and Netlify provide automatic SSL
- For custom servers, configure SSL in your web server

## Monitoring

Consider adding:
- Google Analytics for usage tracking
- Sentry for error monitoring
- Uptime monitoring (UptimeRobot, Pingdom)
- Performance monitoring (Lighthouse CI)

## Post-Deployment

After deployment, verify:
1. All pages load correctly
2. Training modules open properly
3. Charts render correctly
4. Mobile responsiveness
5. SSL certificate is valid
6. Performance scores (Lighthouse)
