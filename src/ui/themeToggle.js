// ============================================================
//  THEME TOGGLE
//  Light/dark mode + colorblind mode toggles with persistence
// ============================================================

// Step 1) Initialise theme from saved preference
function initThemeToggle() {
  var saved = localStorage.getItem("kirra-scheduler-theme");
  if (saved === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }

  // Step 1b) Initialise colorblind mode from saved preference
  var cbSaved = localStorage.getItem("kirra-scheduler-cb");
  if (cbSaved === "true") {
    document.documentElement.setAttribute("data-cb", "true");
  }

  // Step 2) Wire up the theme toggle button
  var btn = document.getElementById("btnThemeToggle");
  if (btn) {
    btn.addEventListener("click", function() {
      var current = document.documentElement.getAttribute("data-theme");
      if (current === "light") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("kirra-scheduler-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("kirra-scheduler-theme", "light");
      }
    });
  }

  // Step 3) Wire up the colorblind toggle button
  var cbBtn = document.getElementById("btnCBToggle");
  if (cbBtn) {
    cbBtn.addEventListener("click", function() {
      var current = document.documentElement.getAttribute("data-cb");
      if (current === "true") {
        document.documentElement.removeAttribute("data-cb");
        localStorage.setItem("kirra-scheduler-cb", "false");
      } else {
        document.documentElement.setAttribute("data-cb", "true");
        localStorage.setItem("kirra-scheduler-cb", "true");
      }
    });
  }
}

export { initThemeToggle };
