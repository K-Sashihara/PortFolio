# GitHub Pages Deployment Guide

This guide explains how to deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub repository for your portfolio
2. GitHub Pages enabled in your repository settings

## Setup Steps

### 1. Repository Configuration

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the configuration

### 2. Update Repository Name in Config

**Important**: Update the repository name in the following files:

#### `vite.config.ts`
```typescript
base: '/your-repository-name/', // Replace with your actual repository name
```

#### `index.html` and `404.html`
```html
<!-- Update all paths to include your repository name -->
<link rel="icon" type="image/svg+xml" href="/your-repository-name/vite.svg" />
<script type="module" src="/your-repository-name/src/main.jsx"></script>
```

### 3. Deploy

The deployment happens automatically when you push to the `main` branch. You can also trigger it manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy Portfolio to GitHub Pages**
3. Click **Run workflow**

## File Structure for Deployment

```
├── vite.config.ts          # Vite configuration with GitHub Pages base path
├── index.html              # Main HTML file
├── 404.html               # SPA routing support
├── package.json           # Includes deploy script
└── .github/workflows/deploy.yml  # GitHub Actions workflow
```

## Important Notes

- **Base Path**: The `base` configuration in `vite.config.ts` must match your repository name
- **SPA Routing**: The `404.html` file ensures that direct links to routes work correctly
- **Automatic Deployment**: Every push to `main` triggers a new deployment
- **Build Output**: The `dist` folder contains the built files for GitHub Pages

## Troubleshooting

### 404 Errors on Direct Links
- Ensure `404.html` is created and identical to `index.html`
- Check that the GitHub Actions workflow includes the step to copy `index.html` to `404.html`

### Assets Not Loading
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that all asset paths in `index.html` include the repository name

### Build Failures
- Check the Actions tab for detailed error logs
- Ensure all dependencies are properly listed in `package.json`

## Local Testing

To test the GitHub Pages build locally:

```bash
npm run build
npm run preview
```

This will build the project and serve it locally with the correct base path.
