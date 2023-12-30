import _, { create } from "lodash";
import todoItem from "./todoClass.js";

const getTitle = function () {
  let title = prompt("TODO's title:", "New TODO");
  return title;
};

const getDescription = function () {
  let description = prompt("TODO's description:", "...");
  return description;
};

const getDueDate = function () {
  let dueDate = prompt("Due Date:", "mm/dd/yyyy");
  return dueDate;
};

const getPriority = function () {
  let priority = prompt("TODO's priority:", "Low/Medium/High");
  return priority;
};

const createTodo = function () {
  let newTodo = new todoItem();
  newTodo.title = getTitle();
  newTodo.description = getDescription();
  newTodo.dueDate = getDueDate();
  newTodo.priority = getPriority();

  return newTodo;
};

console.table(createTodo());
