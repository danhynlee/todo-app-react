import React, { useState } from "react"
// useState is a Hook to add a local state into function component
import { FaPlusCircle } from "react-icons/fa"
// import { IconContext } from "react-icons"

// Hooks can only be called at top level of the function component
// or from custom hooks (not in loop, condition, reg function)
// to ensure that each state is rendered in the same order
// this project is handling preserving state because of create-react-app
// else would need to use ESLint plugin
// -> this keyword does not exist in function based component (same as methods in class components)
const TodoInput = props => {
  // destructuring state arra (contains value passed into useState ""
  // and a function to update that current value)
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = e => {
    // instead of setState() in classBased component
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle />
      </button>

      {/*
        another way to style icons that are side by side without targeting them in CSS file (easier) 
        this allows for configuring prop (everything within .Provider)
      <IconContext.Provider
      value={{
        color: "darkcyan",
        style: { fontSize: "20px", color: "#ff0000"},
        className: "submit-icon"
      }}
      >
        <button className="input-submit">
          <FaPlusCircle />
          <FaPlusCircle />
          <FaPlusCircle />
        </button>
      </IconContext.Provider> */}
    </form>
  )
}

export default TodoInput