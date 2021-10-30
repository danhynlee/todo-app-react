import React, { useState } from "react"
// useState is a Hook to add a local state into function component
import { FaPlusCircle } from "react-icons/fa"

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
    </form>
  )
}

export default TodoInput