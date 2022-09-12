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
document.addEventListener("scroll", function () {
  if (window.innerWidth >= 576) {
    imageIntro.scrollCalculate();
    imageIntro.onScrollMethod();
  }
});
