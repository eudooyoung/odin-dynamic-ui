import dropDown, { getDropDownContent, renderDropDown } from "./drop-down";
import "./styles.css";

const body = document.body;

function init() {
  renderDropDown();
  body.append(dropDown);
}

dropDown.addEventListener("click", (e) => {
  if (e.target.matches("button.show")) {
    const dropDownContent = getDropDownContent();
    dropDownContent.classList.toggle("hide");
  }
});

init();
