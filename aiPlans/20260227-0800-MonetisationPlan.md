# Monetisation Plan — Kirra Scheduler

**Date:** 2026-02-27 08:00
**Status:** Approved — implementation complete

---

## Overview

KirraScheduler is converted from a free open-access web app to a **subscription SaaS product** with:

- **Email + password sign-in** with mandatory **TOTP two-factor authentication (2FA)**
- Two recurring pricing tiers: **$15/month** or **$200/year**
- Payments processed by **Stripe** (automatic recurring billing)
- Hosted on **Firebase** (authentication, Firestore, hosting)

---

## Chosen Hosting Stack — Firebase (Google Cloud)

### Why Firebase?

| Feature | Firebase (recommended) |
|---------|------------------------|
| **Web hosting** | Firebase Hosting — global CDN, custom domain, free SSL, 1-click deploy |
| **Authentication** | Firebase Auth — email/password + TOTP 2FA built-in, no backend code needed |
| **Subscription data** | Firestore — NoSQL database, stores subscription status from Stripe webhook |
| **Payment integration** | "Run Payments with Stripe" Firebase Extension — handles webhook, writes subscription records automatically |
| **Pricing** | Free tier covers small user volumes; Blaze (pay-as-you-go) scales cheaply |
| **SPA support** | Single-page app rewrite rules supported natively |
| **Deployment** | `firebase deploy` or GitHub Actions CI/CD |

### Other Options Considered

| Platform | Verdict |
|----------|---------|
| **AWS Amplify** | More capable but significantly more complex to set up for auth + payments. Recommended if you later need backend APIs (Lambda). |
| **Vercel / Netlify** | Excellent static hosting but require a separate auth provider (e.g. Clerk, Auth0) which adds cost and complexity. |
| **Supabase** | Good open-source Firebase alternative; supports email auth and Postgres. Extra work to integrate Stripe. |

**Decision: Firebase** is the right choice for KirraScheduler's current scale — minimal infrastructure, fully managed, and the Stripe extension handles the hardest part (webhook → subscription status).

---

## Architecture

```
User Browser
    │
    │  HTTPS
    ▼
Firebase Hosting  (static SPA — Vite build)
    │
    │  Firebase SDK (client-side)
    ├──► Firebase Auth     ←──── Email + Password + TOTP 2FA
    │
    └──► Firestore         ←──── Stripe webhook writes subscription records
              /customers/{uid}/subscriptions/{subId}
                  status: "active" | "trialing" | "canceled"
                  price_id: "price_monthly" | "price_annual"
                  current_period_end: Timestamp

Stripe
    ├──► Payment Links     ──────► User completes checkout
    └──► Webhooks          ──────► Firebase "Run Payments with Stripe" Extension
```

---

## Pricing Tiers

| Tier | Price | Billing | Notes |
|------|-------|---------|-------|
| **Monthly** | $15 / month | Auto-renew monthly | Cancel any time |
| **Annual** | $200 / year | Auto-renew yearly | One upfront payment; ~$16.67/month equivalent |

> **Note on annual pricing:** At $15/month, 12 months = $180/year, so $200/year is slightly
> higher than the sum of monthly payments. If you want the annual plan to be a genuine discount,
> consider pricing it at **$144/year** (20% discount) or **$150/year** (~17% discount).
> The $200 annual price is retained as specified in the brief.

---

## Implementation — Files Added

| File | Purpose |
|------|---------|
| `src/auth/firebaseConfig.js` | Firebase project initialisation — reads config from `.env` variables |
| `src/auth/authGate.js` | Entry-point gate: checks sign-in + subscription, shows login or pricing if needed |
| `src/auth/loginPage.js` | Login, sign-up, forgot-password, TOTP enrolment, and TOTP verification UI |
| `src/subscription/pricingPage.js` | Pricing page with Monthly and Annual tiers; Stripe Payment Link buttons; Firestore subscription poller |
| `src/styles/auth.css` | All auth and pricing UI styles |

`src/main.js` — modified to import auth CSS and wrap the boot sequence behind `requireAuth()`.

---

## Setup Instructions

### 1. Create Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and create a new project.
2. Add a **Web app** — copy the config values.
3. Enable **Authentication** → Sign-in providers → **Email/Password** (enable).
4. Enable **Multi-factor authentication** → **Authenticator App (TOTP)** (enable).
5. Enable **Firestore Database** (start in production mode).

### 2. Install the Stripe Firebase Extension

1. In your Firebase project console → **Extensions** → search **"Run Payments with Stripe"**.
2. Follow the setup wizard:
   - Provide your **Stripe Secret Key** (from [stripe.com/dashboard → API Keys](https://dashboard.stripe.com/apikeys)).
   - Set the Firestore path to `customers`.
   - Enable the webhook endpoint (the extension provides the URL to add in Stripe Dashboard).

### 3. Create Stripe Products and Payment Links

1. In [stripe.com/dashboard → Products](https://dashboard.stripe.com/products), create:
   - **Kirra Scheduler Monthly** — $15/month recurring
   - **Kirra Scheduler Annual** — $200/year recurring
2. Create **Payment Links** for each product (Dashboard → Payment Links → + Create).
3. Copy the Payment Link URLs.

### 4. Configure Environment Variables

Create a `.env` file in the project root (do not commit to Git — add to `.gitignore`):

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=000000000000
VITE_FIREBASE_APP_ID=1:000000000000:web:0000000000000000000000

VITE_STRIPE_MONTHLY_LINK=https://buy.stripe.com/your_monthly_link
VITE_STRIPE_ANNUAL_LINK=https://buy.stripe.com/your_annual_link
```

Add `.env` to `.gitignore` if it is not already there:
```
.env
.env.local
.env.*.local
```

### 5. Set Firestore Security Rules

In Firebase Console → Firestore → Rules, apply rules that allow users to read only their own subscription data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Customers can only read their own subscription records
    match /customers/{uid} {
      allow read: if request.auth != null && request.auth.uid == uid;
      match /subscriptions/{id} {
        allow read: if request.auth != null && request.auth.uid == uid;
      }
    }
  }
}
```

### 6. Deploy to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialise (first time only — choose Hosting, point to docs/ output dir)
firebase init hosting

# Build and deploy
npm run build
firebase deploy --only hosting
```

Add custom domain in Firebase Hosting → Custom domains (e.g. `app.kirrascheduler.com`).

### 7. CI/CD with GitHub Actions (optional)

Add a `.github/workflows/deploy.yml` that:
1. Builds the Vite app
2. Runs `firebase deploy --only hosting`

Inject the `.env` values as GitHub repository secrets.

---

## Customer Subscription Flow (End-to-End)

```
New user visits https://your-firebase-hosting-url.web.app
    │
    ├── Not signed in → Login page shown
    │       ↓
    │   Enter email + password
    │       ↓
    │   If new account → TOTP enrolment (scan QR, verify code)
    │       ↓
    │   Signed in but no subscription → Pricing page shown
    │       ↓
    │   Click "Subscribe Monthly" or "Subscribe Annually"
    │       ↓
    │   Stripe Payment Link opens (in new tab)
    │   User enters card details and completes payment
    │       ↓
    │   Stripe fires webhook → Firebase Extension → writes
    │   /customers/{uid}/subscriptions/{id} {status:"active"}
    │       ↓
    │   Pricing page polls Firestore every 5 sec → detects active sub
    │       ↓
    └── App unlocks → KirraScheduler loads normally

Returning user
    │
    ├── Firebase persists the auth session (localStorage)
    ├── onAuthStateChanged fires immediately with cached user
    ├── Firestore query confirms active subscription
    └── App loads instantly with no visible auth screens
```

---

## Subscription Management (Customer Portal)

Stripe's **Customer Portal** lets subscribers manage billing, update payment methods, and cancel.

To enable: Stripe Dashboard → Settings → Billing → Customer portal → Activate.

Add a "Manage subscription" link in the app that opens:
```
https://billing.stripe.com/p/login/YOUR_PORTAL_ID
```

The Firebase Extension stores the Stripe Customer ID in `/customers/{uid}` — this can be used to pre-load the portal with the customer's existing subscription.

---

## Open Questions / Recommendations

1. **Annual price** — $200/year is slightly more than $180 (12 × $15/month). Recommend **$144/year** for a clear 20% annual discount to drive conversions.
2. **Free trial** — Consider a 14-day free trial for new accounts to reduce sign-up friction.
3. **Team/site licences** — Future tier: $X/month for up to N seats (same Firebase project, different Stripe product).
4. **Offline mode** — Subscriptions require an internet connection to verify. Consider a grace period (e.g. allow access for 7 days if Firestore is unreachable) to support sites with intermittent connectivity.

---

## Estimated Setup Time

| Task | Effort |
|------|--------|
| Firebase project creation + Auth config | 30 min |
| Stripe account + products + Payment Links | 30 min |
| Install + configure Stripe Firebase Extension | 45 min |
| .env file + first deploy to Firebase Hosting | 30 min |
| Custom domain setup | 30 min |
| Firestore security rules | 15 min |
| **Total** | **~3 hours** |
