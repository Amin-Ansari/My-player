function ScrollBase(theElement) {
  let theOpacity = 1;
  this.theElement = theElement;
  this.calculateTransform = function () {
    if (window.innerWidth >= 576) {
      let theBoundingTop = theElement.getBoundingClientRect();
      theBoundingTop = theBoundingTop.top / 10 - 16;
      if (theBoundingTop > 0 && theBoundingTop < 58) {
        this.theElement.style = `transform: rotateX(-${theBoundingTop}deg);`;
      }
      if (theBoundingTop > 0) {
        this.theElement.style.opacity = `${theOpacity / theBoundingTop + 0.3}`;
      } else {
        this.theElement.style.opacity = `${theOpacity}`;
      }
    }
  };
}

const introImage = new ScrollBase(document.querySelector(".into-iamge"));
document.addEventListener("scroll", function () {
  introImage.calculateTransform();
});
window.addEventListener("load", function () {
  introImage.calculateTransform();
});
