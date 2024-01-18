class TodoItem {
  #title = "New TODO";
  #description = "";
  #dueDate = new Date();
  #priority = "Low";
  #project = "Inbox";

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(newDueData) {
    this.#dueDate = newDueData;
  }

  get priority() {
    return this.#priority;
  }

  set priority(newPriority) {
    this.#priority = newPriority;
  }

  get project() {
    return this.#project;
  }

  set project(newProject) {
    this.#project = newProject;
  }
}

export default TodoItem;
