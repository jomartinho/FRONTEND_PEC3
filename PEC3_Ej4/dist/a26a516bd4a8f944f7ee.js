"use strict";
/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_model_1 = require("../models/todo.model");
class TodoController {
    constructor(service, view) {
        this.service = service;
        this.view = view;
    }
    addTodo(title) {
        const id = (Math.random() * 1000).toFixed(0);
        const todo = new todo_model_1.TodoModel(id, title);
        this.service.addTodo(todo);
        this.updateView();
    }
    deleteTodo(id) {
        this.service.deleteTodo(id);
        this.updateView();
    }
    toggleTodo(id) {
        this.service.toggleTodo(id);
        this.updateView();
    }
    updateView() {
        const todos = this.service.getTodos();
        this.view.render(todos);
    }
}
exports.TodoController = TodoController;
