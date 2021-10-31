import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// using component instead of direct HTML
//const element = <h1>Hello from Create React App</h1>
import TodoContainer from "./functionBased/components/TodoContainer"

// stylesheet
import "./functionBased/App.css"

// instead of rendering simple HTML like before
// now it renders a React component
//StrictMode used for debugging in devtools at runtime
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)