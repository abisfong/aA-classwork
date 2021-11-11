import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const todo = this.props.todo;
    this.props.removeTodo(todo);
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
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
}

export default TodoListItem;