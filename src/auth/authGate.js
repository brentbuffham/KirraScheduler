// ============================================================
//  AUTH GATE
//  Checks whether the current visitor is:
//    1. Signed in with Firebase Authentication, and
//    2. Has an active Kirra Scheduler subscription in Firestore
//
//  If either condition is not met, the appropriate screen is
//  shown (login or pricing) and the Promise does not resolve
//  until the user is both authenticated and subscribed.
//
//  Called once from main.js before any app UI is rendered.
// ============================================================

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebaseConfig.js";
import { showLoginPage } from "./loginPage.js";
import { showPricingPage, checkSubscription } from "../subscription/pricingPage.js";

var auth = getAuth(firebaseApp);

// Step 1) Master gate — resolves only when the user is signed-in
//         and has an active subscription
function requireAuth() {
  return new Promise(function(resolve) {
    onAuthStateChanged(auth, function(user) {
      if (!user) {
        // Step 1a) Not signed in — show login, then re-check subscription
        showLoginPage().then(function() {
          return checkSubscription();
        }).then(function(active) {
          if (active) {
            resolve();
          } else {
            // Step 1b) Signed in but no subscription — show pricing
            showPricingPage().then(function(result) {
              if (result !== "signout") { resolve(); }
              // If they signed out, onAuthStateChanged fires again → restart gate
            });
          }
        });
      } else {
        // Step 1c) Already signed in — check subscription silently
        checkSubscription().then(function(active) {
          if (active) {
            resolve();
          } else {
            // Step 1d) Signed in but no subscription — show pricing
            showPricingPage().then(function(result) {
              if (result !== "signout") { resolve(); }
            });
          }
        });
      }
    }, function() {
      // Step 1e) Auth state error — fail open so app is accessible
      resolve();
    });
  });
}

// Step 2) Add a sign-out button to the app header once the user is signed in
function attachSignOutButton() {
  var header = document.querySelector(".header-actions");
  if (!header || document.getElementById("btnSignOut")) { return; }

  var btn = document.createElement("button");
  btn.id = "btnSignOut";
  btn.className = "btn";
  btn.title = "Sign out";
  btn.innerHTML =
    "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"16\" height=\"16\">" +
      "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/>" +
      "<polyline points=\"16 17 21 12 16 7\"/>" +
      "<line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"/>" +
    "</svg>" +
    " Sign Out";

  btn.addEventListener("click", function() {
    var firebaseAuth = getAuth(firebaseApp);
    firebaseAuth.signOut().then(function() {
      window.location.reload();
    });
  });

  // Step 2a) Insert before the first existing button
  header.insertBefore(btn, header.firstChild);
}

export { requireAuth, attachSignOutButton };
