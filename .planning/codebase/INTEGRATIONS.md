# External Integrations

**Analysis Date:** 2026-03-25

## APIs & External Services

**Frontend runtime:**
- Google Fonts - Remote font delivery for the live site
  - SDK/Client: browser CSS `@import` in `styles/fonts.css`
  - Auth: none

**Design workflow tooling:**
- Figma Desktop / Chrome DevTools Protocol - Local design-tool connection used by the bundled CLI in `figma-cli/src/figma-client.js`, `figma-cli/src/figjam-client.js`, and `figma-cli/src/daemon.js`
  - SDK/Client: local `fetch()` calls plus `ws` WebSocket client/server from `figma-cli/package.json`
  - Auth: local daemon headers/tokens via process env in `figma-cli/src/index.js` and `figma-cli/src/daemon.js`
- Iconify API - SVG icon fetches in the bundled CLI
  - SDK/Client: plain `fetch()` in `figma-cli/src/figma-client.js` and `figma-cli/src/index.js`
  - Auth: none detected
- Unsplash Source - Random stock image fetches in the bundled CLI
  - SDK/Client: plain `fetch()` against `source.unsplash.com` in `figma-cli/src/figma-client.js`
  - Auth: none detected
- remove.bg API - Background removal support in the bundled CLI
  - SDK/Client: plain `fetch()` in `figma-cli/src/index.js`
  - Auth: `REMOVEBG_API_KEY` env var in `figma-cli/src/index.js`

## Data Storage

**Databases:**
- None detected for the shipped frontend app
  - Connection: Not applicable
  - Client: Not applicable

**File Storage:**
- Local filesystem only
  - Static assets live under `public/visual-ir-assets/`
  - Visual baselines and diffs are written under `tests/visual-baseline/screenshots/` by `tests/visual-baseline/capture.mjs` and `tests/visual-baseline/compare.mjs`

**Caching:**
- None detected

## Authentication & Identity

**Auth Provider:**
- None for the shipped portfolio app
  - Implementation: No sign-in, session, token, or identity provider code detected in `src/`, `app/`, `styles/`, or `public/`

**Tooling-only auth:**
- Local daemon token headers for `figma-cli`
  - Implementation: process env driven HTTP/WebSocket coordination in `figma-cli/src/index.js` and `figma-cli/src/daemon.js`

## Monitoring & Observability

**Error Tracking:**
- None detected

**Logs:**
- Console logging in Node scripts only
  - `tests/visual-baseline/capture.mjs`
  - `tests/visual-baseline/compare.mjs`
  - `figma-cli/src/index.js`
  - `figma-cli/src/daemon.js`

## CI/CD & Deployment

**Hosting:**
- Not specified in code
- Current app structure is compatible with static hosting because the runtime is a Vite-built SPA from `index.html`, `src/main.tsx`, and `app/App.tsx`

**CI Pipeline:**
- None detected

## Environment Configuration

**Required env vars:**
- Frontend runtime: none detected
- Visual tooling: optional `DEV_URL` in `tests/visual-baseline/capture.mjs`
- Bundled `figma-cli`: `DAEMON_PORT`, `DAEMON_MODE`, `DAEMON_IDLE_TIMEOUT`, and `REMOVEBG_API_KEY` referenced in `figma-cli/src/index.js` and `figma-cli/src/daemon.js`

**Secrets location:**
- No project `.env` files detected
- Any secrets for the bundled `figma-cli` are expected via process environment, not committed config files

## Webhooks & Callbacks

**Incoming:**
- None for the shipped portfolio app
- Local-only daemon endpoints exist for the bundled `figma-cli` at localhost, implemented in `figma-cli/src/daemon.js`

**Outgoing:**
- Frontend app requests Google Fonts via `styles/fonts.css`
- Bundled `figma-cli` calls Iconify, Unsplash Source, remove.bg, and local Figma/CDP endpoints from `figma-cli/src/figma-client.js`, `figma-cli/src/figjam-client.js`, and `figma-cli/src/index.js`

---

*Integration audit: 2026-03-25*
