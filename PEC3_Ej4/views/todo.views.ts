/**
 * @class View
 *
 * Visual representation of the model.
 */
import { Todo } from '../models/todo.model';

export class TodoView {
  render(todos: Todo[]): void {
    console.clear();
    console.log('TODO List:');
    todos.forEach((todo) =>
      console.log(`${todo.completed ? '[x]' : '[ ]'} ${todo.title} (ID: ${todo.id})`)
    );
  }
}