const offCanvasButton = document.querySelector(".off-canvas-button");
const moreItem = document.querySelector(".off-canvas-more-items");
const videoPlayButton = document.querySelector(".button-play");
const videoSection = document.querySelector(".vidoe-section");
const videoMedia = document.querySelector("video");
const closeButton = document.querySelector(".close-btn");
const noScaleElement = document.querySelectorAll(".no-scale");

const slaceElement = document.querySelectorAll(".no-scale");
let elementList = [];

// Contructor functions

function ScaleUp(elem, val) {
  this.elementObject = elem;
  this.transformValue = val;
  this.opacityValue = 0.2;
  this.onScrollMethod = function () {
    this.elementObject.style = `transform: scale(${Number(
      this.transformValue
    )});opacity: ${Number(this.opacityValue)} `;
  };
  this.scrollCalculate = function () {
    let bounding = this.elementObject.getBoundingClientRect();
    if (bounding.y <= 750) {
      if (this.transformValue < 1) {
        this.transformValue += 0.009;
        this.opacityValue += 0.02;
      }
    }
  };
}

offCanvasButton.addEventListener("click", () => toggleOffCanvas());
document.addEventListener("click", function (eventObject) {
  if (eventObject.target.classList.contains("off-canvas-container")) {
    toggleOffCanvas();
  }
});
moreItem.firstElementChild.addEventListener("click", () => openAcc());
if (videoPlayButton) {
  videoPlayButton.addEventListener("click", () => showVideo());
}
if (closeButton) {
  closeButton.addEventListener("click", () => closeVideo());
}
document.addEventListener("scroll", function () {
  for (let i = 0; i < elementList.length; i++) {
    elementList[i].scrollCalculate();
    elementList[i].onScrollMethod();
  }
  window.addEventListener("load", function () {
    this.document.documentElement.scrollTop = 0;
  });
});
for (let i = 0; i < noScaleElement.length; i++) {
  elementList.push(new ScaleUp(noScaleElement[i], 0.7));
}
