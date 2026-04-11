## Copilot instructions for this repository

Purpose: help AI coding agents become productive quickly in this Create React App portfolio project.

- **Project root to operate in:** `portfolio/portfolio` (this contains `package.json`, `src/`, `public/`).
- **Project type:** Create React App (uses `react-scripts`). See `package.json` scripts.

- **Common commands (run from project root):**
  - Install: `npm install`
  - Dev: `npm start` (opens at http://localhost:3000)
  - Build: `npm run build`
  - Test: `npm test`
  - Deploy (GitHub Pages): `npm run deploy` (uses `gh-pages -d build`, `predeploy` runs build)

- **Routing & app entry:**
  - Router is HashRouter in `src/App.js` (uses `react-router-dom`). Do not switch to BrowserRouter without checking GitHub Pages behavior.
  - Routes map page components in `src/pages/*.js` (e.g. route `/education` -> `src/pages/Education.js`).

- **Conventions & patterns:**
  - Page components live in `src/pages/` and have paired CSS files (e.g. `Home.js` + `Home.css`).
  - Reusable pieces live in `src/components/` (example: `ClickSpeedGame.js`).
  - Static assets are in `src/assets/` and imported directly (e.g. `profile.jpg`, `RESUME.pdf`).
  - Local state persistence: `ClickSpeedGame.js` uses `localStorage` key `clickSpeedHighScore` — follow that key if working with score data.
  - Audio: `ClickSpeedGame.js` uses the Web Audio API (AudioContext and oscillator). Be careful when changing audio-init code for SSR or test environments.

- **Environment variables:**
  - EmailJS integration is configured via env vars (see README): `REACT_APP_EMAILJS_SERVICE`, `REACT_APP_EMAILJS_TEMPLATE`, `REACT_APP_EMAILJS_PUBLIC`. Use a `.env` in the project root to run the contact form locally.

- **Styling:**
  - Styling is plain CSS; each page/component typically has its own `.css` file. Keep class names stable when editing markup to avoid breaking styles.

- **Testing & tooling:**
  - Tests use CRA's `react-scripts test` and `setupTests.js`. Small components with browser APIs (AudioContext, localStorage) may need mocks in tests.
  - ESLint + Prettier configs exist at project root; respect formatting rules when changing files.

- **Deployment notes:**
  - `package.json` sets a `homepage` for GitHub Pages and has `predeploy` + `deploy` scripts. Building uses `react-scripts build`; deployments expect the `build/` folder.
  - HashRouter is used intentionally to keep routes working when served from GitHub Pages.

- **Small concrete examples:**
  - Add a new page: create `src/pages/Blog.js` and `src/pages/Blog.css`, import the page in `src/App.js`, add a `<Link to="/blog">` in the nav and a `<Route path="/blog" element={<Blog/>} />` in `Routes`.
  - Update resume: replace `src/assets/RESUME.pdf` and ensure `Home.js` import stays `import resumePDF from '../assets/RESUME.pdf'`.
  - Persisted score key: when modifying the click game, preserve `localStorage.setItem('clickSpeedHighScore', ...)` format.

If anything here looks incomplete or you want more agent guidance (code style examples, test mock snippets, or automated dev tasks), tell me which area to expand.
