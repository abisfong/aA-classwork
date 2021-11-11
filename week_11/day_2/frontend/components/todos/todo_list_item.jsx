import React from "react";
import TodoDetailView from "./todo_detail_view";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDoneToggle = this.handleDoneToggle.bind(this);
    this.handleDisplayDetailsToggle = this.handleDisplayDetailsToggle.bind(this)
    this.state = {
      displayDetails: false
    };
  }

  handleDisplayDetailsToggle(e) {
    e.preventDefault();
    this.setState({displayDetails: !this.state.displayDetails})
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
        <div onClick={this.handleDisplayDetailsToggle}>
        <TodoDetailViewContainer displayDetails={this.state.displayDetails}/>
        {todo.title}  
        </div>
        <br />
        <button onClick={this.handleDoneToggle}>
          {todo.done === "true" ? "Undo" : "Done" }
        </button>
      </li>
    );
  }
}

export default TodoListItem;