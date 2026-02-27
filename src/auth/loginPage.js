// ============================================================
//  LOGIN PAGE
//  Email / password authentication with TOTP 2FA support
//  Uses Firebase Auth (modular v9+ SDK)
// ============================================================

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
         sendPasswordResetEmail, multiFactor, TotpMultiFactorGenerator,
         TotpSecret, getMultiFactorResolver } from "firebase/auth";
import { firebaseApp } from "./firebaseConfig.js";

var auth = getAuth(firebaseApp);

// Step 1) State shared between sign-in and 2FA steps
var _mfaResolver = null;    // MultiFactorResolver when 2FA is required

// ============================================================
//  Step 2) Build and show the auth overlay
// ============================================================
function showLoginPage() {
  return new Promise(function(resolve) {

    // Step 2a) Create overlay element
    var overlay = document.createElement("div");
    overlay.id = "authOverlay";
    overlay.className = "auth-overlay";

    // Step 2b) Render the sign-in view into the overlay
    renderSignIn(overlay, resolve);

    document.body.appendChild(overlay);

    // Step 2c) Animate in
    requestAnimationFrame(function() {
      overlay.classList.add("visible");
    });
  });
}

// ============================================================
//  Step 3) Sign-in form
// ============================================================
function renderSignIn(overlay, resolve) {
  overlay.innerHTML =
    "<div class=\"auth-card\">" +
      "<div class=\"auth-logo\">" +
        "<img src=\"icons/kirra-64.png\" alt=\"Kirra\" width=\"56\" height=\"56\" onerror=\"this.style.display='none'\">" +
      "</div>" +
      "<h2 class=\"auth-title\">KIRRA SCHEDULER</h2>" +
      "<p class=\"auth-subtitle\">Sign in to your account</p>" +
      "<div class=\"auth-divider\"></div>" +
      "<form class=\"auth-form\" id=\"signInForm\" autocomplete=\"on\">" +
        "<div class=\"auth-field\">" +
          "<label for=\"authEmail\">Email address</label>" +
          "<input type=\"email\" id=\"authEmail\" name=\"email\" placeholder=\"you@example.com\" autocomplete=\"email\" required>" +
        "</div>" +
        "<div class=\"auth-field\">" +
          "<label for=\"authPassword\">Password</label>" +
          "<input type=\"password\" id=\"authPassword\" name=\"password\" placeholder=\"••••••••\" autocomplete=\"current-password\" required>" +
        "</div>" +
        "<div class=\"auth-error\" id=\"signInError\"></div>" +
        "<button type=\"submit\" class=\"auth-btn-primary\" id=\"signInBtn\">Sign In</button>" +
      "</form>" +
      "<div class=\"auth-toggle\">Don&apos;t have an account? <a id=\"switchToSignUp\">Create one</a></div>" +
      "<div class=\"auth-toggle\" style=\"margin-top:8px\"><a id=\"forgotPassword\">Forgot your password?</a></div>" +
    "</div>";

  // Step 3a) Submit handler
  overlay.querySelector("#signInForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var email    = overlay.querySelector("#authEmail").value.trim();
    var password = overlay.querySelector("#authPassword").value;
    var btn      = overlay.querySelector("#signInBtn");
    var errEl    = overlay.querySelector("#signInError");

    btn.disabled = true;
    btn.textContent = "Signing in…";
    errEl.className = "auth-error";

    signInWithEmailAndPassword(auth, email, password)
      .then(function() {
        closeOverlay(overlay, resolve);
      })
      .catch(function(err) {
        // Step 3b) 2FA required — show TOTP verification step
        if (err.code === "auth/multi-factor-auth-required") {
          _mfaResolver = getMultiFactorResolver(auth, err);
          renderTotpVerify(overlay, resolve);
          return;
        }
        btn.disabled = false;
        btn.textContent = "Sign In";
        errEl.textContent = friendlyError(err.code);
        errEl.className = "auth-error visible";
      });
  });

  // Step 3c) Switch to sign-up
  overlay.querySelector("#switchToSignUp").addEventListener("click", function() {
    renderSignUp(overlay, resolve);
  });

  // Step 3d) Forgot password
  overlay.querySelector("#forgotPassword").addEventListener("click", function() {
    renderForgotPassword(overlay, resolve);
  });
}

// ============================================================
//  Step 4) Sign-up form
// ============================================================
function renderSignUp(overlay, resolve) {
  overlay.innerHTML =
    "<div class=\"auth-card\">" +
      "<div class=\"auth-logo\">" +
        "<img src=\"icons/kirra-64.png\" alt=\"Kirra\" width=\"56\" height=\"56\" onerror=\"this.style.display='none'\">" +
      "</div>" +
      "<h2 class=\"auth-title\">CREATE ACCOUNT</h2>" +
      "<p class=\"auth-subtitle\">Start your Kirra Scheduler subscription</p>" +
      "<div class=\"auth-divider\"></div>" +
      "<form class=\"auth-form\" id=\"signUpForm\" autocomplete=\"on\">" +
        "<div class=\"auth-field\">" +
          "<label for=\"signUpEmail\">Email address</label>" +
          "<input type=\"email\" id=\"signUpEmail\" name=\"email\" placeholder=\"you@example.com\" autocomplete=\"email\" required>" +
        "</div>" +
        "<div class=\"auth-field\">" +
          "<label for=\"signUpPassword\">Password <span style=\"font-weight:400;text-transform:none\">(min 8 chars)</span></label>" +
          "<input type=\"password\" id=\"signUpPassword\" name=\"new-password\" placeholder=\"Choose a strong password\" autocomplete=\"new-password\" required minlength=\"8\">" +
        "</div>" +
        "<div class=\"auth-field\">" +
          "<label for=\"signUpConfirm\">Confirm password</label>" +
          "<input type=\"password\" id=\"signUpConfirm\" name=\"confirm-password\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required minlength=\"8\">" +
        "</div>" +
        "<div class=\"auth-error\" id=\"signUpError\"></div>" +
        "<button type=\"submit\" class=\"auth-btn-primary\" id=\"signUpBtn\">Create Account</button>" +
      "</form>" +
      "<div class=\"auth-toggle\">Already have an account? <a id=\"switchToSignIn\">Sign in</a></div>" +
    "</div>";

  // Step 4a) Submit handler
  overlay.querySelector("#signUpForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var email    = overlay.querySelector("#signUpEmail").value.trim();
    var password = overlay.querySelector("#signUpPassword").value;
    var confirm  = overlay.querySelector("#signUpConfirm").value;
    var btn      = overlay.querySelector("#signUpBtn");
    var errEl    = overlay.querySelector("#signUpError");

    if (password !== confirm) {
      errEl.textContent = "Passwords do not match.";
      errEl.className = "auth-error visible";
      return;
    }

    btn.disabled = true;
    btn.textContent = "Creating account…";
    errEl.className = "auth-error";

    createUserWithEmailAndPassword(auth, email, password)
      .then(function() {
        // Step 4b) Account created — prompt 2FA enrolment then proceed to pricing
        renderTotpEnrol(overlay, resolve);
      })
      .catch(function(err) {
        btn.disabled = false;
        btn.textContent = "Create Account";
        errEl.textContent = friendlyError(err.code);
        errEl.className = "auth-error visible";
      });
  });

  // Step 4c) Switch back to sign-in
  overlay.querySelector("#switchToSignIn").addEventListener("click", function() {
    renderSignIn(overlay, resolve);
  });
}

// ============================================================
//  Step 5) Forgot-password form
// ============================================================
function renderForgotPassword(overlay, resolve) {
  overlay.innerHTML =
    "<div class=\"auth-card\">" +
      "<h2 class=\"auth-title\">RESET PASSWORD</h2>" +
      "<p class=\"auth-subtitle\">We&apos;ll email you a reset link</p>" +
      "<div class=\"auth-divider\"></div>" +
      "<form class=\"auth-form\" id=\"resetForm\">" +
        "<div class=\"auth-field\">" +
          "<label for=\"resetEmail\">Email address</label>" +
          "<input type=\"email\" id=\"resetEmail\" placeholder=\"you@example.com\" required>" +
        "</div>" +
        "<div class=\"auth-error\" id=\"resetError\"></div>" +
        "<div class=\"auth-info\" id=\"resetInfo\" style=\"display:none\">Reset email sent — check your inbox.</div>" +
        "<button type=\"submit\" class=\"auth-btn-primary\" id=\"resetBtn\">Send Reset Email</button>" +
      "</form>" +
      "<div class=\"auth-toggle\"><a id=\"backToSignIn\">Back to sign in</a></div>" +
    "</div>";

  overlay.querySelector("#resetForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var email = overlay.querySelector("#resetEmail").value.trim();
    var btn   = overlay.querySelector("#resetBtn");
    var errEl = overlay.querySelector("#resetError");
    var infoEl = overlay.querySelector("#resetInfo");

    btn.disabled = true;
    btn.textContent = "Sending…";

    sendPasswordResetEmail(auth, email)
      .then(function() {
        infoEl.style.display = "block";
        btn.style.display = "none";
      })
      .catch(function(err) {
        btn.disabled = false;
        btn.textContent = "Send Reset Email";
        errEl.textContent = friendlyError(err.code);
        errEl.className = "auth-error visible";
      });
  });

  overlay.querySelector("#backToSignIn").addEventListener("click", function() {
    renderSignIn(overlay, resolve);
  });
}

// ============================================================
//  Step 6) TOTP enrolment — shown once after sign-up
// ============================================================
function renderTotpEnrol(overlay, resolve) {
  var user = auth.currentUser;
  if (!user) { closeOverlay(overlay, resolve); return; }

  // Step 6a) Show loading state while generating secret
  overlay.innerHTML =
    "<div class=\"auth-card\">" +
      "<h2 class=\"auth-title\">SECURE YOUR ACCOUNT</h2>" +
      "<p class=\"auth-subtitle\">Set up two-factor authentication (2FA)</p>" +
      "<div class=\"auth-divider\"></div>" +
      "<div class=\"auth-spinner\"></div>" +
      "<p style=\"color:var(--text-muted);font-size:13px\">Generating authenticator QR code…</p>" +
    "</div>";

  // Step 6b) Generate TOTP secret
  var session = multiFactor(user).getSession();
  session.then(function(multiFactorSession) {
    return TotpMultiFactorGenerator.generateSecret(multiFactorSession);
  }).then(function(totpSecret) {
    var qrUrl = totpSecret.generateQrCodeUrl("KirraScheduler", user.email || "user");

    overlay.innerHTML =
      "<div class=\"auth-card\">" +
        "<h2 class=\"auth-title\">SET UP 2FA</h2>" +
        "<p class=\"auth-subtitle\">Scan this QR code in your authenticator app<br>(Google Authenticator, Authy, etc.)</p>" +
        "<div class=\"auth-divider\"></div>" +
        "<div class=\"auth-qr-wrapper\">" +
          "<img src=\"" + qrCodeImageUrl(qrUrl) + "\" width=\"180\" height=\"180\" alt=\"2FA QR code\">" +
        "</div>" +
        "<p class=\"auth-totp-hint\">After scanning, enter the 6-digit code shown in your authenticator app to verify and save.</p>" +
        "<form class=\"auth-form\" id=\"enrolForm\">" +
          "<div class=\"auth-field\">" +
            "<label for=\"totpCode\">6-digit code</label>" +
            "<input type=\"text\" id=\"totpCode\" placeholder=\"000000\" maxlength=\"6\" inputmode=\"numeric\" autocomplete=\"one-time-code\" required>" +
          "</div>" +
          "<div class=\"auth-error\" id=\"enrolError\"></div>" +
          "<button type=\"submit\" class=\"auth-btn-primary\" id=\"enrolBtn\">Verify &amp; Enable 2FA</button>" +
        "</form>" +
        "<div class=\"auth-toggle\" style=\"margin-top:12px\"><a id=\"skipMfa\">Skip for now (not recommended)</a></div>" +
      "</div>";

    // Step 6c) Verify and enrol
    overlay.querySelector("#enrolForm").addEventListener("submit", function(e) {
      e.preventDefault();
      var code  = overlay.querySelector("#totpCode").value.trim();
      var btn   = overlay.querySelector("#enrolBtn");
      var errEl = overlay.querySelector("#enrolError");

      btn.disabled = true;
      btn.textContent = "Verifying…";

      var credential = TotpMultiFactorGenerator.assertionForEnrollment(totpSecret, code);
      multiFactor(user).enroll(credential, "Authenticator app")
        .then(function() {
          closeOverlay(overlay, resolve);
        })
        .catch(function(err) {
          btn.disabled = false;
          btn.textContent = "Verify & Enable 2FA";
          errEl.textContent = friendlyError(err.code) || "Invalid code — try again.";
          errEl.className = "auth-error visible";
        });
    });

    // Step 6d) Skip enrolment (not recommended)
    overlay.querySelector("#skipMfa").addEventListener("click", function() {
      closeOverlay(overlay, resolve);
    });

  }).catch(function() {
    closeOverlay(overlay, resolve);
  });
}

// ============================================================
//  Step 7) TOTP verification — shown on sign-in when 2FA enrolled
// ============================================================
function renderTotpVerify(overlay, resolve) {
  overlay.innerHTML =
    "<div class=\"auth-card\">" +
      "<h2 class=\"auth-title\">TWO-FACTOR AUTH</h2>" +
      "<p class=\"auth-subtitle\">Enter the code from your authenticator app</p>" +
      "<div class=\"auth-divider\"></div>" +
      "<form class=\"auth-form\" id=\"totpForm\">" +
        "<div class=\"auth-field\">" +
          "<label for=\"totpVerifyCode\">6-digit code</label>" +
          "<input type=\"text\" id=\"totpVerifyCode\" placeholder=\"000000\" maxlength=\"6\" inputmode=\"numeric\" autocomplete=\"one-time-code\" required autofocus>" +
        "</div>" +
        "<div class=\"auth-error\" id=\"totpError\"></div>" +
        "<button type=\"submit\" class=\"auth-btn-primary\" id=\"totpBtn\">Verify</button>" +
      "</form>" +
    "</div>";

  overlay.querySelector("#totpForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var code  = overlay.querySelector("#totpVerifyCode").value.trim();
    var btn   = overlay.querySelector("#totpBtn");
    var errEl = overlay.querySelector("#totpError");

    btn.disabled = true;
    btn.textContent = "Verifying…";

    // Step 7a) Use first TOTP hint from resolver
    var hints = _mfaResolver.hints.filter(function(h) {
      return h.factorId === TotpMultiFactorGenerator.FACTOR_ID;
    });
    if (!hints.length) {
      errEl.textContent = "No TOTP factor found on this account.";
      errEl.className = "auth-error visible";
      btn.disabled = false;
      btn.textContent = "Verify";
      return;
    }

    var assertion = TotpMultiFactorGenerator.assertionForSignIn(hints[0].uid, code);
    _mfaResolver.resolveSignIn(assertion)
      .then(function() {
        closeOverlay(overlay, resolve);
      })
      .catch(function(err) {
        btn.disabled = false;
        btn.textContent = "Verify";
        errEl.textContent = friendlyError(err.code) || "Invalid code — try again.";
        errEl.className = "auth-error visible";
      });
  });
}

// ============================================================
//  Step 8) Close the auth overlay and resolve the promise
// ============================================================
function closeOverlay(overlay, resolve) {
  overlay.classList.remove("visible");
  setTimeout(function() {
    overlay.remove();
    resolve();
  }, 300);
}

// ============================================================
//  Step 9) Generate QR code image URL via Google Charts API
//          (client-side only — no secret is sent, only the
//          otpauth:// URL which is already visible to the user)
// ============================================================
function qrCodeImageUrl(otpauthUrl) {
  return "https://chart.googleapis.com/chart?chs=180x180&cht=qr&chl=" +
    encodeURIComponent(otpauthUrl);
}

// ============================================================
//  Step 10) Human-readable Firebase Auth error messages
// ============================================================
function friendlyError(code) {
  var map = {
    "auth/invalid-email":             "Please enter a valid email address.",
    "auth/user-disabled":             "This account has been disabled. Contact support.",
    "auth/user-not-found":            "No account found with that email address.",
    "auth/wrong-password":            "Incorrect password. Please try again.",
    "auth/invalid-credential":        "Incorrect email or password.",
    "auth/email-already-in-use":      "An account already exists with that email.",
    "auth/weak-password":             "Password must be at least 8 characters.",
    "auth/too-many-requests":         "Too many attempts. Please wait and try again.",
    "auth/network-request-failed":    "Network error. Check your connection and retry.",
    "auth/invalid-verification-code": "Invalid 2FA code. Check your authenticator app.",
    "auth/totp-challenge-timeout":    "The 2FA challenge timed out. Please sign in again."
  };
  return map[code] || ("Authentication error (" + code + ").");
}

export { showLoginPage };
