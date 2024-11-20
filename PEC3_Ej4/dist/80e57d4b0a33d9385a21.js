"use strict";
/**
 * @class Model
 *
 * Manages the data of the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
class TodoModel {
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.TodoModel = TodoModel;
