// ============================================================
//  DOM UTILITIES
// ============================================================

// Close a modal/overlay only when the backdrop itself is BOTH
// pressed and released. Guards against a text-selection drag that
// starts inside the dialog (e.g. on an input) and ends on the
// backdrop — that sequence fires a click whose target is the
// overlay, which would otherwise close the dialog unexpectedly.
function closeOnBackdrop(overlay, onClose) {
  var pressedOnBackdrop = false;
  overlay.addEventListener("mousedown", function(e) {
    pressedOnBackdrop = (e.target === overlay);
  });
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay && pressedOnBackdrop) onClose();
    pressedOnBackdrop = false;
  });
}

export { closeOnBackdrop };
