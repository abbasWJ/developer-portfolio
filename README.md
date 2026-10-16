# Abbas — Developer Portfolio

A responsive dark portfolio built with Next.js, TypeScript, Tailwind CSS, and Lucide icons.

## 1. Requirements

- Node.js 20.9+ (Node 22 LTS recommended)
- npm
- Git (for deployment)

## 2. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Before publishing, search the project for these placeholders and replace them:

- `YOUR_EMAIL@example.com`
- `YOUR_GITHUB`
- `YOUR_LINKEDIN`
- `Abbas` if you prefer a different display name
- `example.com` in `app/layout.tsx` once you have a real domain

Also edit the project descriptions, experience, and skills so they reflect only work you can accurately discuss and publicly share. Do not include confidential company information.

## 3. Production build

```bash
npm run build
npm run start
```

## 4. Deploy to Vercel for free

1. Create a GitHub account if you don't already have one.
2. Create a new GitHub repository, e.g. `developer-portfolio`.
3. From this project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB/developer-portfolio.git
   git push -u origin main
   ```

4. Sign in at https://vercel.com/ using GitHub.
5. Choose **Add New → Project**, then import `developer-portfolio`.
6. Vercel should detect Next.js automatically. Keep the default build settings and click **Deploy**.
7. You'll receive a public `*.vercel.app` URL. Future pushes to `main` will trigger deployments automatically.

## 5. Free alternative: Cloudflare Pages

For this app, Vercel is the simplest path because it supports Next.js directly. Cloudflare Pages is excellent for static sites, but this project should not be moved to static export without first checking any Next.js features and adapting configuration. If you want a static-only version, ask for a static export adaptation.

## 6. Before sharing with recruiters

- Add your real email, LinkedIn, GitHub, and a PDF CV.
- Add 2–4 projects with your contribution, architecture, and truthful outcomes.
- Add exact employer names and dates only after verifying them.
- Test on mobile and desktop.
- Check every external link.
- Never publish API keys, production URLs that expose internal systems, private source code, or customer data.
