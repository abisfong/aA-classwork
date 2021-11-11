import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDoneToggle = this.handleDoneToggle.bind(this);
    this.state = {
      detail: false
    };
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
        <button onClick={this.handleDoneToggle}>
          {todo.done === "true" ? "Undo" : "Done" }
        </button>
      </li>
    );
  }
}

export default TodoListItem;