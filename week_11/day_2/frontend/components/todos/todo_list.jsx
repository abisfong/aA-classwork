import React from "react";
import TodoForm from "./todo_form";
import TodoListItem from "./todo_list_item";

const TodoList = ({receiveTodo, todos}) => (
  <div>
    <ul>
      {todos.map((todo, i) => <TodoListItem key={i} todo={todo} />)}
    </ul>
    <TodoForm receiveTodo={receiveTodo} todos={todos}/>
  </div>
);

export default TodoList;