/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
 
import { TodoService } from '../services/todo.service';
import { TodoView } from '../views/todo.views';
import { TodoModel } from '../models/todo.model';

export class TodoController {
  private service: TodoService;
  private view: TodoView;

  constructor(service: TodoService, view: TodoView) {
    this.service = service;
    this.view = view;
  }

  addTodo(title: string): void {
    const id = (Math.random() * 1000).toFixed(0);
    const todo = new TodoModel(id, title);
    this.service.addTodo(todo);
    this.updateView();
  }

  deleteTodo(id: string): void {
    this.service.deleteTodo(id);
    this.updateView();
  }

  toggleTodo(id: string): void {
    this.service.toggleTodo(id);
    this.updateView();
  }

  updateView(): void {
    const todos = this.service.getTodos();
    this.view.render(todos);
  }
}
