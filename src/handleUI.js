import "./style.css";

const handleBtns = function () {
  const todoBtn = document.createElement("button");
  todoBtn.setAttribute("class", "todo-btn");
  todoBtn.textContent = "+";

  todoBtn.addEventListener("click", () => {
    const todoPopUp = document.getElementById("todo_popup");
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
  popupDiv.setAttribute("class", "todo-popup");
  popupDiv.setAttribute("id", "todo_popup");

  return popupDiv;
};

(function () {
  document.body.appendChild(handleDivs());
  document.body.appendChild(createPopup());
})();
