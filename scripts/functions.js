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
if (questionList) {
  questionList.addEventListener("click", function (eventObject) {
    if (eventObject.target.nodeName == "H6") {
      let theAnswer = eventObject.target.nextElementSibling;
      if (!returnTheHeight(eventObject.target.nextElementSibling)) {
        theAnswer.style = `height:${theAnswer.scrollHeight + 28}px;`;
        theAnswer.classList.toggle("answer-padding");
        togglePlus(eventObject.target.firstElementChild.children);
      } else {
        theAnswer.style = "height:0px;";
        theAnswer.classList.toggle("answer-padding");
        togglePlus(eventObject.target.firstElementChild.children);
      }
    } else if (eventObject.target.nodeName == "SPAN") {
      let theAnswer = eventObject.target.parentElement.nextElementSibling;
      if (
        !returnTheHeight(eventObject.target.parentElement.nextElementSibling)
      ) {
        theAnswer.style = `height:${theAnswer.scrollHeight + 28}px;`;
        theAnswer.classList.toggle("answer-padding");
        togglePlus(eventObject.target.children);
      } else {
        theAnswer.style = "height:0px;";
        theAnswer.classList.toggle("answer-padding");
        togglePlus(eventObject.target.children);
      }
    } else if (eventObject.target.nodeName == "I") {
      let theAnswer =
        eventObject.target.parentElement.parentElement.nextElementSibling;
      if (
        !returnTheHeight(
          eventObject.target.parentElement.parentElement.nextElementSibling
        )
      ) {
        theAnswer.style = `height:${theAnswer.scrollHeight + 28}px;`;
        theAnswer.classList.toggle("answer-padding");
        togglePlus(eventObject.target.parentElement.children);
      } else {
        theAnswer.style = "height:0px;";
        theAnswer.classList.toggle("answer-padding");
        togglePlus(eventObject.target.parentElement.children);
      }
    }
  });
}
function returnTheHeight(object) {
  let theStyle = getComputedStyle(object).height;
  return Number(theStyle.split("px")[0]);
}
function togglePlus(objectCollection) {
  for (let i = 0; i < objectCollection.length; i++) {
    objectCollection[i].classList.toggle("clicked-acc");
  }
}
