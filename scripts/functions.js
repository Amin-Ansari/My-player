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
function showVideo() {
  videoSection.classList.replace("dis-none", "dis-flex");
}
function closeVideo() {
  closeButton.parentElement.classList.replace("dis-flex", "dis-none");
  pauseTheVideo();
}
function pauseTheVideo() {
  videoMedia.currentTime = 0;
  videoMedia.pause();
}
function toggleQuestion(eventObject) {
  if (eventObject.target.classList.contains("question")) {
    eventObject.target.classList.toggle("open-question");
    let plusIcon = eventObject.target.lastElementChild.children;
    togglePlus(plusIcon);
  } else if (eventObject.target.classList.contains("open-close-icon")) {
    eventObject.target.parentElement.classList.toggle("open-question");
    let plusIcon = eventObject.target.parentElement.lastElementChild.children;
    togglePlus(plusIcon);
  } else {
    eventObject.target.parentElement.parentElement.classList.toggle(
      "open-question"
    );
    let plusIcon =
      eventObject.target.parentElement.parentElement.lastElementChild.children;
    togglePlus(plusIcon);
  }
}
function togglePlus(objectCollection) {
  for (let i = 0; i < objectCollection.length; i++) {
    objectCollection[i].classList.toggle("clicked-acc");
  }
}
