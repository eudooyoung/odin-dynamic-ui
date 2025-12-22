const carousel = document.createElement("div");
carousel.classList.add("carousel");

const SLIDE_COUNT = 10;
let currentSlideId = 0;

export function renderCarousel() {
  const carouselTitle = document.createElement("div");
  carouselTitle.classList.add("carousel-title");
  carouselTitle.textContent = "carousel";

  const slideWrapper = renderSlideWrapper();

  const btnSlideLeft = document.createElement("button");
  btnSlideLeft.classList.add("left");
  btnSlideLeft.textContent = "<";

  const btnSlideRight = document.createElement("button");
  btnSlideRight.classList.add("right");
  btnSlideRight.textContent = ">";

  const dotsContainer = renderDotsContainer();

  carousel.append(
    carouselTitle,
    slideWrapper,
    btnSlideLeft,
    btnSlideRight,
    dotsContainer,
  );

  setCurrentSlideById(0);
}

function renderSlideWrapper() {
  const slideWrapper = document.createElement("div");
  slideWrapper.classList.add("slide-wrapper");

  for (let i = 0; i < SLIDE_COUNT; i++) {
    const slideItem = document.createElement("div");
    slideItem.dataset.id = i;
    slideItem.classList.add("slide-item");
    slideItem.textContent = i + 1;
    slideWrapper.append(slideItem);
  }

  return slideWrapper;
}

function renderDotsContainer() {
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots-container");

  for (let i = 0; i < SLIDE_COUNT; i++) {
    const dot = document.createElement("div");
    dot.dataset.id = i;
    dot.classList.add("dot-item");
    dotsContainer.append(dot);
  }

  return dotsContainer;
}

export function setCurrentSlideById(slideId) {
  currentSlideId = slideId;
  const slides = carousel.querySelectorAll(".slide-item");
  slides.forEach((slideItem) =>
    slideItem.classList.toggle(
      "selected",
      Number(slideItem.dataset.id) === slideId,
    ),
  );

  const dots = carousel.querySelectorAll(".dot-item");
  dots.forEach((dotItem) =>
    dotItem.classList.toggle(
      "selected",
      Number(dotItem.dataset.id) === slideId,
    ),
  );
}

export function advanceForward() {
  const nextSlideId = (currentSlideId + 1) % SLIDE_COUNT;
  setCurrentSlideById(nextSlideId);
}

export function advanceBackward() {
  const previousSlideId = (currentSlideId - 1 + SLIDE_COUNT) % SLIDE_COUNT;
  setCurrentSlideById(previousSlideId);
}

export default carousel;
