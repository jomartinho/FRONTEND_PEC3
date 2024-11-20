/**
 * @class Model
 *
 * Manages the data of the application.
 */

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export class TodoModel implements Todo {
  id: string;
  title: string;
  completed: boolean;

  constructor(id: string, title: string, completed: boolean = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}