import React, { useState, useEffect } from "react"
import NavBar from "./Navbar"
import Header from "./Header"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import {v4 as uuidv4 } from "uuid"
import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"

// no props becuase it is the parent component
const TodoContainer = () => {
  // removes redundant useEffect call with empty array
  const [todos, setTodos] = useState(getInitialTodos())

  // acces to prevState from function passed to setTodos
  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  // hook method serves as lifecycle methods from class based components
  // like componentDidUpdate()/DidMount()/etc.
  // function will define which side effect to run
  // optional array as parameter defines when to re-run effect
  // -> array needed when effect uses any component values (props,states,functions)
  // default, this method will run after every completed render (first render or any time state/prop changes)
  // useEffect(() => {
  //   console.log("test run")
  //   // getting stored items in local storage on broswer
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)
  //   if (loadedTodos) {
  //     // although we are using setTodos function
  //     // it is not necessary to add to parameter array
  //     // because it never changes so it is safe to omit (stable & doesn't change on re-renders)
  //     // ESLint may give warning => just add setTodos to array then
  //     setTodos(loadedTodos)
  //   }
  // }, [])

  // another method from above
  function getInitialTodos() {
    // getting stored items in local storage on browser
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  // this useEffect will only run when todos is change
  // React will check on the dependencies to re-run effect
  useEffect(() => {
    // storing todo items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <>
    <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <TodoInput addTodoProps={addTodoItem} />
              <TodoList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  )
}

export default TodoContainer
