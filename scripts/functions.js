function toggleOffCanvas() {
  const bars = document.querySelectorAll(".bars");
  const offCanvasContainer = document.querySelector(".off-canvas-container");
  bars.forEach(function (item) {
    item.classList.toggle("clicked");
  });
  offCanvasContainer.classList.toggle("show");
}
function openAcc() {
  moreItem.firstElementChild.lastElementChild.classList.toggle("rotate-angle");
  moreItem.lastElementChild.classList.toggle("open-acc");
}
