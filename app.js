const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false,
  prevDrag,
  slideNext;

let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(function (icon) {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
  });
});

function draggStart(e) {
  isDragStart = true;
  prevDrag = e.pageX;
  slideNext = carousel.scrollLeft;
}
function dragging(e) {
  if (!isDragStart) return;
  e.preventDefault();
  let positionPrev = e.pageX - prevDrag;
  carousel.scrollLeft = slideNext - positionPrev;
}

function dragStop() {
  isDragStart = false;
}

carousel.addEventListener("mousedown", draggStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
