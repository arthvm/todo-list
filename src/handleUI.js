import "./style.css";
import todoClass from "./todoClass.js";

const handleBtns = function () {
  const todoBtn = document.createElement("button");
  todoBtn.setAttribute("class", "todo-btn");
  todoBtn.textContent = "+";

  todoBtn.addEventListener("click", () => {
    const todoPopUp = document.getElementById("popup");
    todoPopUp.style.display = "block";
  });

  return todoBtn;
};

const handleDivs = function () {
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("class", "container");

  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menu");
  containerDiv.appendChild(menuDiv);

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "main");
  containerDiv.appendChild(mainDiv);

  containerDiv.appendChild(handleBtns());

  return containerDiv;
};

const createPopup = function () {
  const popupDiv = document.createElement("div");
  popupDiv.setAttribute("class", "popup-div");
  popupDiv.setAttribute("id", "popup");

  const todoPopup = document.createElement("div");
  todoPopup.setAttribute("class", "todo-popup");

  const todoObj = new todoClass();
  const todoPropertiesArr = Object.getOwnPropertyNames(
    Object.getPrototypeOf(todoObj)
  );
  for (let i = 1; i < todoPropertiesArr.length; i++) {
    const inputDiv = document.createElement("div");
    inputDiv.setAttribute("class", "input-div");

    const inputName = document.createElement("h2");
    /*******************SETS STRINGS TO THE RIGHT FORMAT****************************/
    const varStr = `${todoPropertiesArr[i]}`;
    let nameStr = varStr[0].toUpperCase() + varStr.slice(1);
    nameStr = nameStr.replace(/([a-z])([A-Z])/g, "$1 $2");
    /******************************************************************************/
    inputName.textContent = `${nameStr}`;
    inputName.setAttribute("class", "input-name");

    const inputField = document.createElement("input");
    inputField.setAttribute("class", "input-field");
    inputField.setAttribute("id", `${todoPropertiesArr[i]}_input`);

    inputDiv.appendChild(inputName);
    inputDiv.appendChild(inputField);

    todoPopup.appendChild(inputDiv);
  }

  popupDiv.appendChild(todoPopup);
  return popupDiv;
};

(function () {
  document.body.appendChild(handleDivs());
  document.body.appendChild(createPopup());
})();
