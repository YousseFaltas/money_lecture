# Money, Investing & Self-Control

An interactive 22-screen financial-literacy presentation for an Egyptian scout-team lecture. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. A specific lecture slide can be opened directly, for example `http://localhost:3000/?slide=6`.

## Controls

- Next: Right Arrow, Space, Page Down, swipe left, or the next button
- Previous: Left Arrow, Backspace, Page Up, swipe right, or the previous button
- Opening: Home
- Closing: End
- Fullscreen: fullscreen button

## Replace presentation assets

Add the real screenshots or graph at these exact paths; no code changes are needed:

```text
public/screenshots/explore-page.png
public/screenshots/funds-page.png
public/screenshots/example-fund-view.png
public/screenshots/buy-step-1.png
public/screenshots/buy-step-2.png
public/screenshots/buy-step-3.png
public/charts/compound-growth.png
```

Until those files are supplied, the presentation displays neutral labeled placeholders and does not invent application screens or graph data.

## Vercel

Import the repository into Vercel and keep the detected Next.js defaults. No environment variables or custom build settings are required.

Production verification:

```bash
npm run lint
npm run build
```
