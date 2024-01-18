import "./style.css";

const handleDivs = function () {
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("class", "container");

  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menu");
  containerDiv.appendChild(menuDiv);

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "main");
  containerDiv.appendChild(mainDiv);

  return containerDiv;
};

(function () {
  document.body.appendChild(handleDivs());
  console.log("Test");
})();
