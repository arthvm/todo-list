const getTitle = function () {
  /* TEST */
  let title = prompt("Insert Title");
  return title;
  //GET TITLE FROM INPUT FIELD
};

const getDescription = function () {
  /* TEST */
  let description = prompt("Insert Description");
  return description;
  //GET DESCRIPTION FROM INPUT FIELD
};

const getDueDate = function () {
  /* TEST */
  let dueDate = prompt("Insert DueDate");
  return dueDate;
  //GET DUE DATE FROM INPUT FIELD
};

const getPriority = function () {
  /* TEST */
  let priority = prompt("Insert Priority");
  return priority;
  //GET PRIORITY FROM INPUT FIELD
};

export { getTitle, getDescription, getDueDate, getPriority };
