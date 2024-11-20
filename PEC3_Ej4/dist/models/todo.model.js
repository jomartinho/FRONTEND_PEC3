"use strict";
/**
 * @class Model
 *
 * Manages the data of the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
var TodoModel = /** @class */ (function () {
    function TodoModel(id, title, completed) {
        if (completed === void 0) { completed = false; }
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    return TodoModel;
}());
exports.TodoModel = TodoModel;
