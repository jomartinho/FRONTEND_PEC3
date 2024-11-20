"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todos = [];
    }
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoService.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoService.prototype.toggleTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = !todo.completed;
        }
    };
    return TodoService;
}());
exports.TodoService = TodoService;
