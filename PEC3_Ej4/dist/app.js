"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_controller_1 = require("./controllers/todo.controller");
var todo_service_1 = require("./services/todo.service");
var todo_views_1 = require("./views/todo.views");
var service = new todo_service_1.TodoService();
var view = new todo_views_1.TodoView();
var controller = new todo_controller_1.TodoController(service, view);
controller.addTodo('Learn TypeScript');
controller.addTodo('Build a TODO app');
controller.toggleTodo('1');
controller.deleteTodo('1');
