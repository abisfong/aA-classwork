import React from "react";
import TodoDetailViewContainer from "./todo_detail_view_container"

export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    e.preventDefault();
    const todo = this.props.todo;
    this.props.removeTodo(todo);
  }

  render() {
    const todo = this.props.todo;
    if (!this.props.displayDetails) return "";
    return (
      <div>
        { todo.body }
        <br />
        { todo.done === 'true' ? 'done' : 'not done' }
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
