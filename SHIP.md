# FocusWall Website — SHIP.md

## 30-Second Pitch

**focuswall-website** is the marketing and legal host for the FocusWall Pro browser extension ecosystem. It delivers the Chrome Web Store-required privacy policy pages for both **FocusWall Pro** and **ChatVault Pro**, plus a landing page that converts organic search traffic ("MV2 dead → MV3 focus blocker") into Chrome Web Store installs. Deployed on Vercel, monetised by AdSense.

**Stack:** Vanilla HTML · CSS · Vercel · Google AdSense
**URLs:** `https://focuswall.learnhubplay.nl/` (live)

---

## 10-Minute Demo Path

### 0–2 min — Local Preview
```bash
cd focuswall-website
npx serve .
# Open http://localhost:3000
```
Or just open `index.html` directly in a browser.

### 2–4 min — Landing Page Tour
- **Hero** — "Reclaim your focus. Rebuild your digital boundary."
- **Features** — offline-first, MV3-native, ambient audio, schedules, analytics
- **CTA** — links to Chrome Web Store listing
- **Pricing page** — `pricing.html` (FW-PRO-DEMO license key works today)

### 4–6 min — Privacy Pages (CWS Requirement)
Open:
- `privacy.html` → FocusWall Pro privacy policy (linked in CWS listing)
- `privacy-chatvault.html` → ChatVault Pro privacy policy

These URLs must return 200 before CWS review submission.

### 6–8 min — Support & Legal Pages
- `support.html` — user support contact
- `terms.html` — terms of service
- `sitemap.xml` + `robots.txt` — SEO scaffolding in place

### 8–10 min — Deploy Verification
```bash
curl -I https://focuswall.learnhubplay.nl/privacy.html
curl -I https://focuswall.learnhubplay.nl/privacy-chatvault.html
# Both must return HTTP/2 200
```
AdSense account: `ca-pub-6924669630970781`

---

## Key Differentiators
- 📋 **CWS-compliant** — privacy pages satisfy Chrome Web Store policy requirements
- 💰 **AdSense monetised** — passive revenue from organic SEO traffic
- 🚀 **Vercel edge** — zero-config global CDN, custom domain, HTTPS
- 🔗 **Extension ecosystem hub** — central legal/marketing home for all extensions
