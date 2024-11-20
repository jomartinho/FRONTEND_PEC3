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
var todo_model_1 = require("../models/todo.model");
var TodoController = /** @class */ (function () {
    function TodoController(service, view) {
        this.service = service;
        this.view = view;
    }
    TodoController.prototype.addTodo = function (title) {
        var id = (Math.random() * 1000).toFixed(0);
        var todo = new todo_model_1.TodoModel(id, title);
        this.service.addTodo(todo);
        this.updateView();
    };
    TodoController.prototype.deleteTodo = function (id) {
        this.service.deleteTodo(id);
        this.updateView();
    };
    TodoController.prototype.toggleTodo = function (id) {
        this.service.toggleTodo(id);
        this.updateView();
    };
    TodoController.prototype.updateView = function () {
        var todos = this.service.getTodos();
        this.view.render(todos);
    };
    return TodoController;
}());
exports.TodoController = TodoController;
