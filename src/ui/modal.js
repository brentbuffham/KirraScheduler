// ============================================================
//  MODAL HELPERS
//  Open and close modal overlay dialogs
//  Tab switching for tabbed modals
// ============================================================

// Step 1) Show a modal by adding the 'show' class, scroll body to top
function openModal(id) {
  var overlay = document.getElementById(id);
  overlay.classList.add("show");

  // Step 1a) Scroll the modal body to the top so header is visible
  var body = overlay.querySelector(".modal-body");
  if (body) body.scrollTop = 0;

  // Step 1b) Reset to first tab if modal has tabs
  var tabs = overlay.querySelectorAll(".modal-tab");
  var panes = overlay.querySelectorAll(".modal-tab-pane");
  if (tabs.length > 0) {
    tabs.forEach(function(t) { t.classList.remove("active"); });
    panes.forEach(function(p) { p.classList.remove("active"); });
    tabs[0].classList.add("active");
    panes[0].classList.add("active");
  }
}

// Step 2) Hide a modal by removing the 'show' class
function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}

// Step 3) Initialise tab switching for any modal with .modal-tabs
function initModalTabs() {
  document.querySelectorAll(".modal-tabs").forEach(function(tabBar) {
    tabBar.addEventListener("click", function(e) {
      var tab = e.target.closest(".modal-tab");
      if (!tab) return;

      var targetId = tab.dataset.tab;
      if (!targetId) return;

      // Step 3a) Deactivate all sibling tabs and panes
      var modalBody = tabBar.closest(".modal-body");
      if (!modalBody) return;

      tabBar.querySelectorAll(".modal-tab").forEach(function(t) {
        t.classList.remove("active");
      });
      modalBody.querySelectorAll(".modal-tab-pane").forEach(function(p) {
        p.classList.remove("active");
      });

      // Step 3b) Activate the clicked tab and its pane
      tab.classList.add("active");
      var pane = document.getElementById(targetId);
      if (pane) pane.classList.add("active");
    });
  });
}

export { openModal, closeModal, initModalTabs };
