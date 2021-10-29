import React, { Component } from "react";

class TodoInput extends Component {
  state = {
    title: ""
  };

  // e is a predetermined parameter
  // holds info on the event
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.title);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default TodoInput