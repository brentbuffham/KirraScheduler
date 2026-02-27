// ============================================================
//  FIREBASE CONFIG
//  Replace ALL placeholder values below with your real project
//  settings from the Firebase Console:
//  https://console.firebase.google.com/ → Project Settings → Your apps
//
//  IMPORTANT: Do NOT commit real API keys to a public repository.
//  Use environment variables (.env file + Vite's import.meta.env)
//  in production — see setup instructions in:
//  aiPlans/20260227-0800-MonetisationPlan.md
// ============================================================

import { initializeApp } from "firebase/app";

// Step 1) Firebase project configuration — replace with your real values
var firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY             || "YOUR_API_KEY",
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN         || "your-project.firebaseapp.com",
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID          || "your-project-id",
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET      || "your-project.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId:             import.meta.env.VITE_FIREBASE_APP_ID              || "1:000000000000:web:0000000000000000000000"
};

// Step 2) Initialise and export the Firebase app singleton
var firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
