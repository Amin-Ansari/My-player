const offCanvasButton = document.querySelector(".off-canvas-button");
const moreItem = document.querySelector(".off-canvas-more-items");
const videoPlayButton = document.querySelector(".button-play");
const videoSection = document.querySelector(".vidoe-section");
const videoMedia = document.querySelector("video");
const closeButton = document.querySelector(".close-btn");
const noScaleElement = document.querySelectorAll(".no-scale");
const slaceElement = document.querySelectorAll(".no-scale");
const questionList = document.querySelector(".questions-list");
let elementList = [];

// Contructor functions

function ScaleupBase(theElement) {
  let theOpacity = 1;
  let theSclae = 1;
  this.theElement = theElement;
  this.sclaeCalculate = function () {
    let theBoundingTop = theElement.getBoundingClientRect().top;
    theBoundingTop = (theBoundingTop + 95) / 400;
    if (theSclae / theBoundingTop < 1 && theSclae / theBoundingTop >= 0) {
      theElement.style = `transform: scale(${theSclae / theBoundingTop})`;
    } else {
      theElement.style = `transform: scale(${theSclae})`;
    }
    if (theSclae / theBoundingTop < 1 && theSclae / theBoundingTop >= 0) {
      this.theElement.style.opacity = `${theOpacity / theBoundingTop - 0.3}`;
    } else {
      this.theElement.style.opacity = `${theOpacity}`;
    }
  };
}

// Event listeners
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
    elementList[i].sclaeCalculate();
  }
});
window.addEventListener("load", function () {
  for (let i = 0; i < elementList.length; i++) {
    elementList[i].sclaeCalculate();
  }
});

// This loop makes instanses per each element which has no-sclae class
for (let i = 0; i < noScaleElement.length; i++) {
  elementList.push(new ScaleupBase(noScaleElement[i]));
}
