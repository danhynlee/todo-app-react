import React from "react"
import ReactDOM from "react-dom"

// using component instead of direct HTML
//const element = <h1>Hello from Create React App</h1>
import TodoContainer from "./components/TodoContainer"

// stylesheet
import "./App.css"

// instead of rendering simple HTML like before
// now it renders a React component
//StrictMode used for debugging in devtools at runtime
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)