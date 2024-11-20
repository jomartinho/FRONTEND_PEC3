"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoView = void 0;
class TodoView {
    render(todos) {
        console.clear();
        console.log('TODO List:');
        todos.forEach((todo) => console.log(`${todo.completed ? '[x]' : '[ ]'} ${todo.title} (ID: ${todo.id})`));
    }
}
exports.TodoView = TodoView;
