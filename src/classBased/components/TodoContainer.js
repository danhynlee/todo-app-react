import React from "react"
import {v4 as uuidv4 } from "uuid";

import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";

// class based component
class TodoContainer extends React.Component {
  // declaring state => object with key-value pair
  state = {
    todos: [],
  };

  handleChange = (id) => {
    // below does not guarantee that this.state in .setState() is updated
    // this.setState({
    //   todos: this.state.todos.map(todo => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //     }
    //     return todo;
    //   })
    // });

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
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  // lifecycle method like render()
  // but gets invoked immediately after render()
  // componentDidMount() {
  //   // make a request to url containing api data
  //   // returns promise containing HTTP response
  //   // recieved in string so had to convert to json (.json())
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then(res => res.json())
  //     .then(data => this.setState({ todos: data}));
    
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)
  //   if (loadedTodos) {
  //     this.setState({
  //       todos: loadedTodos
  //     })
  //   }
  // }

  // another lifecycle method that gets invoked
  // immediately after updating (if props or state changes)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }

  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
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
      // className is JSX (class in HTML)
      <div className="container">
        <div className="inner">
          <Header />
          <TodoInput addTodoProps={this.addTodoItem} />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer
