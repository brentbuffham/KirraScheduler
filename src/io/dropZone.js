// ============================================================
//  DROP ZONE
//  Generic drag-and-drop file upload handler
// ============================================================

// Step 1) Set up a drop zone with click and drag/drop file handling
function setupDropZone(zoneId, inputId, handler) {
  var zone = document.getElementById(zoneId);
  var input = document.getElementById(inputId);

  zone.addEventListener("click", function() { input.click(); });
  zone.addEventListener("dragover", function(e) {
    e.preventDefault();
    zone.classList.add("dragover");
  });
  zone.addEventListener("dragleave", function() {
    zone.classList.remove("dragover");
  });
  zone.addEventListener("drop", function(e) {
    e.preventDefault();
    zone.classList.remove("dragover");
    var file = e.dataTransfer.files[0];
    if (file) handler(file);
  });
  input.addEventListener("change", function(e) {
    if (e.target.files[0]) handler(e.target.files[0]);
  });
}

export { setupDropZone };
