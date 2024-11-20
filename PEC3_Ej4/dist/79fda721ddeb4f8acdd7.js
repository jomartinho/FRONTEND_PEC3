"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    constructor() {
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    toggleTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
}
exports.TodoService = TodoService;
