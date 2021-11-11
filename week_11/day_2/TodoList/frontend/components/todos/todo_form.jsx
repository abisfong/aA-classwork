import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: (props.todos.length + 1),
      title: "",
      body: "",
      done: false
    }
    // ((obj) => {
    //   for (let field in obj)
    //     if (typeof obj[field] === 'function')
    //       obj[field] = obj[field].bind(obj);
    // })(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearTodo = this.clearTodo.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateBody = this.updateBody.bind(this)
    this.updateDone = this.updateDone.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = this.state;
    this.props.receiveTodo(todo);
    this.clearTodo();
  }

  clearTodo() {
    this.setState({
      id: this.state.id + 1,
      title: "",
      body: "",
      done: false
    })
  }

  updateTitle(e) {
    e.preventDefault();
    const title = e.target.value;
    this.setState({ title })
  }

  updateBody(e) {
    e.preventDefault();
    const body = e.target.value;
    this.setState({ body })
  }

  updateDone(e) {
    e.preventDefault();
    const done = e.target.value;
    this.setState({done})
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>Title
          <input type="text" onChange={this.updateTitle} value={this.state.title}/>
      </label>
      <label>Body
          <input type="text" onChange={this.updateBody} value={this.state.body}/>
      </label>
      <br />
      <label>Done?
        <br />
        <label>Yes
          <input type="radio" name="done" value="true" onChange={this.updateDone} />
        </label>
        <label>No 
            <input type="radio" name="done" value="false" onChange={this.updateDone} checked/>
        </label>
      </label>
      <br />
      <button>Submit</button>
    </form>
    )
  }
}

export default TodoForm;