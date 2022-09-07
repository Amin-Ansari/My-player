const offCanvasButton = document.querySelector(".off-canvas-button");
const moreItem = document.querySelector(".off-canvas-more-items");
const videoPlayButton = document.querySelector(".button-play");
const videoSection = document.querySelector(".vidoe-section");
const closeButton = document.querySelector(".close-btn");

offCanvasButton.addEventListener("click", () => toggleOffCanvas());
document.addEventListener("click", function (eventObject) {
  if (eventObject.target.classList.contains("off-canvas-container")) {
    toggleOffCanvas();
  }
});
moreItem.firstElementChild.addEventListener("click", () => openAcc());
videoPlayButton.addEventListener("click", () => showVideo());
closeButton.addEventListener("click", () => closeVideo());
