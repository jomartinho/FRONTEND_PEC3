import { TodoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';
import { TodoView } from './views/todo.views';


const service = new TodoService();
const view = new TodoView();
const controller = new TodoController(service, view);

controller.addTodo('Learn TypeScript');
controller.addTodo('Build a TODO app');
controller.toggleTodo('1');
controller.deleteTodo('1');