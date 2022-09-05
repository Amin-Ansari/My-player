const offCanvasButton = document.querySelector(".off-canvas-button");
const moreItem = document.querySelector(".off-canvas-more-items");

offCanvasButton.addEventListener("click", () => toggleOffCanvas());
document.addEventListener("click", function (eventObject) {
  if (eventObject.target.classList.contains("off-canvas-container")) {
    toggleOffCanvas();
  }
});
moreItem.addEventListener("click", () => openAcc());
