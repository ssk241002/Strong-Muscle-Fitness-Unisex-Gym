# Strong Muscle Fitness Unisex Gym

A modern, responsive web application for **Strong Muscle Fitness Unisex Gym** located in Thirumullaivoyal, Chennai. Built with React 19, Vite, Tailwind CSS, Lucide icons, and Motion animations.

## 🚀 Quick Deployment Guide

### Deploying via GitHub & Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Strong Muscle Fitness Unisex Gym"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify App](https://app.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
   - Choose **GitHub** and select this repository.
   - Netlify will automatically detect the settings from `netlify.toml`:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click **"Deploy site"**.

3. **Manual / CLI Deployment (Alternative)**:
   ```bash
   # Build the production bundle
   npm run build

   # Deploy directly via Netlify CLI
   npx netlify-cli deploy --prod --dir=dist
   ```

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:5173`) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

- `netlify.toml` — Netlify build configuration, SPA redirect rules, and security headers
- `public/_redirects` — Fallback client-side routing rule (`/* /index.html 200`)
- `src/components/` — Modular UI components (Hero, Facilities, Timings, Gallery, Pricing, BMI Calculator, Reviews, Location, FAQs)
- `src/data/gymData.ts` — Verified gym contact info, Google Maps coordinates, review data, timings, and facility specifications
- `src/assets/` — Visual assets and photography
