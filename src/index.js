import _, { create } from "lodash";
import todoItem from "./todoClass.js";
import {
  getTitle,
  getDescription,
  getDueDate,
  getPriority,
} from "./handleUserInput.js";

const createTodo = function () {
  let newTodo = new todoItem();
  return newTodo;
};

const setTodoAttributes = function (currentTodo) {
  currentTodo.title = getTitle();
  currentTodo.description = getDescription();
  currentTodo.dueDate = getDueDate();
  currentTodo.priority = getPriority();

  return currentTodo;
};

//TEST
console.table(setTodoAttributes(createTodo()));
