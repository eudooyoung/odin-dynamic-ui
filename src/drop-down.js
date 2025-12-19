const dropDown = document.createElement("div");
dropDown.classList.add("drop-down");

export function renderDropDown() {
  const btnDropDown = document.createElement("button");
  btnDropDown.classList.add("show");
  btnDropDown.type = "button";
  btnDropDown.textContent = "Drop Down Button";

  const dropDownContent = renderDropDownContent();

  dropDown.append(btnDropDown, dropDownContent);
}

function renderDropDownContent() {
  const dropDownContent = document.createElement("div");
  dropDownContent.classList.add("content", "hide");

  const dropDownList = document.createElement("ul");
  dropDownList.classList.add("list");

  for (let i = 0; i < 3; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = `Item ${i}`;
    dropDownList.append(listItem);
  }

  dropDownContent.append(dropDownList);

  return dropDownContent;
}

export function getDropDownContent() {
  return dropDown.querySelector(".content");
}

export default dropDown;
