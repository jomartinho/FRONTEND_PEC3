"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoView = void 0;
var TodoView = /** @class */ (function () {
    function TodoView() {
    }
    TodoView.prototype.render = function (todos) {
        console.clear();
        console.log('TODO List:');
        todos.forEach(function (todo) {
            return console.log("".concat(todo.completed ? '[x]' : '[ ]', " ").concat(todo.title, " (ID: ").concat(todo.id, ")"));
        });
    };
    return TodoView;
}());
exports.TodoView = TodoView;
