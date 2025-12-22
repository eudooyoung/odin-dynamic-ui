import carousel, {
  advanceBackward,
  advanceForward,
  renderCarousel,
  setCurrentSlideById,
} from "./image-carousel.js";
import dropDown, { getDropDownContent, renderDropDown } from "./drop-down";
import "./styles.css";

const body = document.body;

const dropDownContainer = document.createElement("div");
dropDownContainer.classList.add("drop-down-container");
const carouselContainer = document.createElement("div");
carouselContainer.classList.add("carousel-container");

body.append(dropDownContainer, carouselContainer);

function init() {
  renderDropDown();
  renderCarousel();
  dropDownContainer.append(dropDown);
  carouselContainer.append(carousel);

  setInterval(advanceForward, 5000);
}

dropDown.addEventListener("click", (e) => {
  if (e.target.matches("button.show")) {
    const dropDownContent = getDropDownContent();
    dropDownContent.classList.toggle("hide");
  }
});

carousel.addEventListener("click", (e) => {
  if (e.target.matches("button.right")) {
    advanceForward();
    return;
  }

  if (e.target.matches("button.left")) {
    advanceBackward();
    return;
  }

  const dotItem = e.target.closest(".dot-item");
  if (dotItem) {
    const slideId = Number(dotItem.dataset.id);
    setCurrentSlideById(slideId);
    return;
  }
});

init();
