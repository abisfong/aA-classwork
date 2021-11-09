import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', function() {
  const store = configureStore();
  window.store = store;
});