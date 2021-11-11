import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDoneToggle = this.handleDoneToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const todo = this.props.todo;
    this.props.removeTodo(todo);
  }

  handleDoneToggle(e) {
    e.preventDefault();
    const todo = this.props.todo;
    todo.done === "true" ? todo.done = "false" : todo.done = "true";
    this.props.receiveTodo(todo);
  }

  render() {
    const todo = this.props.todo;
    return (
      <li>
        {todo.title}
        <br />
        {todo.body}
        <br />
        {todo.done === 'true' ? 'done' : 'not done'}
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleDoneToggle}>
          {todo.done === "true" ? "Undo" : "Done" }
        </button>
      </li>
    );
  }
}

export default TodoListItem;