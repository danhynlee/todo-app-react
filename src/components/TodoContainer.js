import React from "react"

import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";

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

  handleChange = (id) => {
    // this.setState({
    //   todos: this.state.todos.map(todo => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //     }
    //     return todo;
    //   })
    // });
    // above method does not guarantee that this.state in .setState() is updated

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = title => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

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
        <TodoInput addTodoProps={this.addTodoItem} />
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer
