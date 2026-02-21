// ============================================================
//  MODAL HELPERS
//  Open and close modal overlay dialogs
// ============================================================

// Step 1) Show a modal by adding the 'show' class
function openModal(id) {
  document.getElementById(id).classList.add("show");
}

// Step 2) Hide a modal by removing the 'show' class
function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}

export { openModal, closeModal };
