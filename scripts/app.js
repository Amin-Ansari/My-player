const offCanvasButton = document.querySelector(".off-canvas-button");

offCanvasButton.addEventListener("click", () => toggleOffCanvas());
document.addEventListener("click", function (eventObject) {
  if (eventObject.target.classList.contains("off-canvas-container")) {
    toggleOffCanvas();
  }
});
