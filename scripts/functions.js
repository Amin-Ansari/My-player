function toggleOffCanvas() {
  const bars = document.querySelectorAll(".bars");
  const offCanvasContainer = document.querySelector(".off-canvas-container");
  bars.forEach(function (item) {
    item.classList.toggle("clicked");
  });
  offCanvasContainer.classList.toggle("show");
}
