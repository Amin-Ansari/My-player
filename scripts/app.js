const offCanvasButton = document.querySelector(".off-canvas-button");
const moreItem = document.querySelector(".off-canvas-more-items");
const videoPlayButton = document.querySelector(".button-play");
const videoSection = document.querySelector(".vidoe-section");
const closeButton = document.querySelector(".close-btn");
const noScaleElement = document.querySelectorAll(".no-scale");
function ElementScroll(elem, val) {
  this.elementObject = elem;
  this.transformValue = val;
  this.opacityValue = 0.2;
  this.onScrollMethod = function () {
    this.elementObject.style = `transform: rotateX(${Number(
      this.transformValue
    )}deg);opacity: ${Number(this.opacityValue)} `;
  };
  this.scrollCalculate = function () {
    let bounding = this.elementObject.getBoundingClientRect();
    if (this.transformValue < 0) {
      this.transformValue += document.documentElement.scrollTop / 120;
      this.opacityValue += document.documentElement.scrollTop / 8000;
    }
  };
}
const imageIntro = new ElementScroll(
  document.querySelector(".into-iamge"),
  -50
);
const slaceElement = document.querySelectorAll(".no-scale");
let elementList = [];

offCanvasButton.addEventListener("click", () => toggleOffCanvas());
document.addEventListener("click", function (eventObject) {
  if (eventObject.target.classList.contains("off-canvas-container")) {
    toggleOffCanvas();
  }
});
moreItem.firstElementChild.addEventListener("click", () => openAcc());
videoPlayButton.addEventListener("click", () => showVideo());
closeButton.addEventListener("click", () => closeVideo());
document.addEventListener("scroll", function () {
  if (window.innerWidth >= 576) {
    imageIntro.scrollCalculate();
    imageIntro.onScrollMethod();
  }
  for (let i = 0; i < elementList.length; i++) {
    elementList[i].scrollCalculate();
    elementList[i].onScrollMethod();
  }
});
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
for (let i = 0; i < noScaleElement.length; i++) {
  elementList.push(new ScaleUp(noScaleElement[i], 0.7));
}
console.log(elementList[0].scrollCalculate());
