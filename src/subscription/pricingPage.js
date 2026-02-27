// ============================================================
//  PRICING PAGE
//  Shows subscription tiers and links to Stripe Checkout.
//  Two tiers:
//    • Monthly  — $15 / month  (billed monthly, cancel anytime)
//    • Annual   — $200 / year  (billed yearly, save $40 vs monthly)
//
//  Integration:
//    Subscription status is written to Firestore by the
//    "Run Payments with Stripe" Firebase Extension after each
//    successful payment.  authGate.js reads
//    /customers/{uid}/subscriptions to decide whether to gate
//    or allow app access.
//
//  Setup:
//    Replace VITE_STRIPE_MONTHLY_LINK and VITE_STRIPE_ANNUAL_LINK
//    with your real Stripe Payment Link URLs (from stripe.com/payment-links).
// ============================================================

import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../auth/firebaseConfig.js";

var auth = getAuth(firebaseApp);

// Step 1) Stripe Payment Link URLs
//         Set these in your .env file (never hard-code real links here)
var MONTHLY_LINK = import.meta.env.VITE_STRIPE_MONTHLY_LINK || "#setup-stripe-monthly-link";
var ANNUAL_LINK  = import.meta.env.VITE_STRIPE_ANNUAL_LINK  || "#setup-stripe-annual-link";

// ============================================================
//  Step 2) Show the pricing overlay
// ============================================================
function showPricingPage() {
  return new Promise(function(resolve) {
    var overlay = document.createElement("div");
    overlay.id = "pricingOverlay";
    overlay.className = "pricing-overlay";

    var user = auth.currentUser;
    var emailDisplay = user ? " for <strong>" + escapeHtml(user.email || "") + "</strong>" : "";

    overlay.innerHTML =
      "<div class=\"pricing-card\">" +
        "<div class=\"auth-logo\">" +
          "<img src=\"icons/kirra-64.png\" alt=\"Kirra\" width=\"56\" height=\"56\" onerror=\"this.style.display='none'\">" +
        "</div>" +
        "<h2 class=\"auth-title\">CHOOSE YOUR PLAN</h2>" +
        "<p class=\"auth-subtitle\">" +
          "Full access to Kirra Scheduler — Drill &amp; Blast Open Cut Planning" +
        "</p>" +
        "<div class=\"auth-divider\"></div>" +
        "<div class=\"pricing-tiers\">" +

          // Step 2a) Monthly tier
          "<div class=\"pricing-tier tier-monthly\">" +
            "<div class=\"tier-name\">Monthly</div>" +
            "<div class=\"tier-price\">$15<span> / mo</span></div>" +
            "<div class=\"tier-billing\">Billed monthly &bull; Cancel anytime</div>" +
            "<div class=\"tier-divider\"></div>" +
            "<ul class=\"tier-features\">" +
              "<li>Full Gantt scheduler</li>" +
              "<li>Blast overview &amp; forecasting</li>" +
              "<li>Pattern library &amp; templates</li>" +
              "<li>Conformance tracking</li>" +
              "<li>3D playback view</li>" +
              "<li>KAP / DXF import &amp; export</li>" +
              "<li>Equipment management</li>" +
            "</ul>" +
            "<button class=\"tier-btn tier-btn-monthly\" id=\"btnMonthly\">Subscribe Monthly</button>" +
          "</div>" +

          // Step 2b) Annual tier
          "<div class=\"pricing-tier tier-annual\">" +
            "<div class=\"tier-name\">Annual</div>" +
            "<div class=\"tier-price\">$200<span> / yr</span></div>" +
            "<div class=\"tier-billing\">Billed annually</div>" +
            "<div class=\"tier-saving\">≈$16.67/month — pay once yearly</div>" +
            "<div class=\"tier-divider\"></div>" +
            "<ul class=\"tier-features\">" +
              "<li>Full Gantt scheduler</li>" +
              "<li>Blast overview &amp; forecasting</li>" +
              "<li>Pattern library &amp; templates</li>" +
              "<li>Conformance tracking</li>" +
              "<li>3D playback view</li>" +
              "<li>KAP / DXF import &amp; export</li>" +
              "<li>Equipment management</li>" +
            "</ul>" +
            "<button class=\"tier-btn tier-btn-annual\" id=\"btnAnnual\">Subscribe Annually</button>" +
          "</div>" +

        "</div>" +

        "<p class=\"pricing-note\">" +
          "Payments are processed securely by <strong>Stripe</strong>. " +
          "Subscriptions auto-renew; cancel any time from your account portal. " +
          "Prices shown in USD." +
        "</p>" +

        "<div class=\"pricing-logout\">" +
          "Signed in" + emailDisplay + ". " +
          "<a id=\"pricingSignOut\">Sign out</a>" +
        "</div>" +

      "</div>";

    document.body.appendChild(overlay);

    requestAnimationFrame(function() {
      overlay.classList.add("visible");
    });

    // Step 3a) Monthly subscribe — open Stripe Payment Link with pre-filled email
    overlay.querySelector("#btnMonthly").addEventListener("click", function() {
      openStripeLink(MONTHLY_LINK);
    });

    // Step 3b) Annual subscribe — open Stripe Payment Link with pre-filled email
    overlay.querySelector("#btnAnnual").addEventListener("click", function() {
      openStripeLink(ANNUAL_LINK);
    });

    // Step 3c) Sign out from pricing page
    overlay.querySelector("#pricingSignOut").addEventListener("click", function() {
      signOut(auth).then(function() {
        closePricing(overlay);
        resolve("signout");
      });
    });

    // Step 4) Poll Firestore for subscription activation after Stripe redirect
    //         The user may complete payment in the same tab (or return to it);
    //         start a lightweight poller that checks every 5 seconds.
    var pollInterval = setInterval(function() {
      checkSubscription().then(function(active) {
        if (active) {
          clearInterval(pollInterval);
          closePricing(overlay);
          resolve("subscribed");
        }
      });
    }, 5000);

    // Step 5) Store poll handle on overlay so callers can cancel it if needed
    overlay._pollInterval = pollInterval;
  });
}

// ============================================================
//  Step 6) Open Stripe Payment Link in a new tab, pre-filling
//          the customer email to reduce friction
// ============================================================
function openStripeLink(baseUrl) {
  var user = auth.currentUser;
  var url  = baseUrl;
  if (user && user.email && baseUrl.startsWith("https://")) {
    url = baseUrl + "?prefilled_email=" + encodeURIComponent(user.email);
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

// ============================================================
//  Step 7) Check if the current user has an active subscription
//          Reads from Firestore path: /customers/{uid}/subscriptions
//          Written by the "Run Payments with Stripe" Firebase Extension
// ============================================================
function checkSubscription() {
  var user = auth.currentUser;
  if (!user) { return Promise.resolve(false); }

  // Dynamic import keeps Firestore out of the initial bundle when
  // auth is not yet initialised
  return import("firebase/firestore").then(function(firestoreModule) {
    var db           = firestoreModule.getFirestore(firebaseApp);
    var col          = firestoreModule.collection(db, "customers", user.uid, "subscriptions");
    var activeQuery  = firestoreModule.query(
      col,
      firestoreModule.where("status", "in", ["active", "trialing"])
    );
    return firestoreModule.getDocs(activeQuery).then(function(snap) {
      return !snap.empty;
    });
  }).catch(function() {
    return false;
  });
}

// ============================================================
//  Step 8) Close the pricing overlay
// ============================================================
function closePricing(overlay) {
  if (overlay._pollInterval) { clearInterval(overlay._pollInterval); }
  overlay.classList.remove("visible");
  setTimeout(function() { overlay.remove(); }, 300);
}

// ============================================================
//  Step 9) Escape HTML for safe display of user-provided strings
// ============================================================
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export { showPricingPage, checkSubscription };
