
export const allTodos = (state) => {
  const todos = Object.values(state.todos);
  return todos;
}