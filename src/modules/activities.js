class Activities {
  constructor(title,description,dueDate,priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get dueDate() {
    return this.dueDate;
  }
  
  get priority() {
    return this.priority;
  }

  set title(title) {
    this.title = title;
  }

  set description(description) {
    this.description = description;
  }

  set dueDate(dueDate) {
    this.dueDate = dueDate;
  }

  set priority(priority) {
    this.priority = priority;
  }

}