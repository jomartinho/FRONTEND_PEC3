/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/todo.controller.js":
/*!****************************************!*\
  !*** ./controllers/todo.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoController = void 0;
const todo_model_1 = __webpack_require__(/*! ../models/todo.model */ "./models/todo.model.js");
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


/***/ }),

/***/ "./models/todo.model.js":
/*!******************************!*\
  !*** ./models/todo.model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @class Model
 *
 * Manages the data of the application.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoModel = void 0;
class TodoModel {
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.TodoModel = TodoModel;


/***/ }),

/***/ "./services/todo.service.js":
/*!**********************************!*\
  !*** ./services/todo.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./views/todo.views.js":
/*!*****************************!*\
  !*** ./views/todo.views.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoView = void 0;
class TodoView {
    render(todos) {
        console.clear();
        console.log('TODO List:');
        todos.forEach((todo) => console.log(`${todo.completed ? '[x]' : '[ ]'} ${todo.title} (ID: ${todo.id})`));
    }
}
exports.TodoView = TodoView;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************!*\
  !*** ./app.ts ***!
  \****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var todo_controller_1 = __webpack_require__(/*! ./controllers/todo.controller */ "./controllers/todo.controller.js");
var todo_service_1 = __webpack_require__(/*! ./services/todo.service */ "./services/todo.service.js");
var todo_views_1 = __webpack_require__(/*! ./views/todo.views */ "./views/todo.views.js");
var service = new todo_service_1.TodoService();
var view = new todo_views_1.TodoView();
var controller = new todo_controller_1.TodoController(service, view);
controller.addTodo('Learn TypeScript');
controller.addTodo('Build a TODO app');
controller.toggleTodo('1');
controller.deleteTodo('1');

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map