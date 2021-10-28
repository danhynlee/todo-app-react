import React from "react"

import TodoList from "./TodoList";
import Header from "./Header";

// class based component
class TodoContainer extends React.Component {
  // declaring state => object with key-value pair
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      },
    ]
  };

  render() {
    return (
      // JSX (not HTML)
      // will automaticall be converted to vanilla JS by Babel (already installed by create-react-app CLI)
      // <div>
      //   <h1>Hello from Create React App</h1>
      //   <p>I am in a React Component!</p>
      // </div>

      // passing state data to child component via props
      <div>
        <Header />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer
