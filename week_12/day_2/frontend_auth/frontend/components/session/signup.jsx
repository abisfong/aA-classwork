import React from 'react';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (event) => {
      this.setState({ [field]: event.target.value })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state)
      .then(() => this.props.history.push('/chirps'));
  }
  
  render() {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form>
          <label>Username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleInput('username')}/>
          </label>
          <label>Email:
            <input 
              type="text"
              value={this.state.email} 
              onChange={this.handleInput('email')}/>
          </label>
          <label>Password:
            <input 
              type="password"
              value={this.state.password} 
              onChange={this.handleInput('password')}/>
          </label>
          <button onClick={this.handleSubmit}>Signup</button>
        </form>
      </div>
    )
  }
}