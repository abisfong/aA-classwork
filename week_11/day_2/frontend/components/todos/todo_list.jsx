import React from "react";
import { receiveTodos } from "../../actions/todo_actions";
import TodoForm from "./todo_form";
import TodoListItem from "./todo_list_item";

const TodoList = ({receiveTodo, removeTodo, todos}) => (
  <div>
    <ul>
      {todos.map((todo, i) => (
        <TodoListItem removeTodo={removeTodo} receiveTodo={receiveTodo} key={i} todo={todo} />
      ))}
    </ul>
    <TodoForm receiveTodo={receiveTodo} todos={todos}/>
  </div>
);

export default TodoList;