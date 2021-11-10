import configureStore from './store/store';
import { 
  receiveTodo, 
  receiveTodos,
  removeTodo
} from './actions/todo_actions'

document.addEventListener('DOMContentLoaded', function() {
  const newTodos = [{ id: 1, title: 'job1'}, { id: 2, title: 'job2' }]
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.newTodos = newTodos;
});