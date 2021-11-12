import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import todoApiUtil from './util/todo_api_util';

import configureStore from './store/store';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', function() {
  // const newTodos = [{ id: 1, title: 'job1'}, { id: 2, title: 'job2' }]
  const store = configureStore();
  window.store = store;
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.removeTodo = removeTodo;
  // window.receiveStep = receiveStep;
  // window.receiveSteps = receiveSteps;
  // window.removeStep = removeStep;
  // window.newTodos = newTodos;
  window.allTodos = allTodos;
  window.todoApiUtil = todoApiUtil;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});