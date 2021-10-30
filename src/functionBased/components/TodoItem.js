import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }
  
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  
  const { completed, id, title } = props.todo
  
  let viewMode = {}
  let editMode = {}
  
  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  // componentWillUnmount is unnecessary becuase useEffect also perform cleanup affect
  // along with its render by default
  useEffect(() => {
    // when returning a function inside useEffect w/o dependencies
    // the effect will just run once & function will be called when component is about to unmount
    // however, if we don't specify array, the effect goes back to default (executes on every re-render & performs cleanup)
    // -> in this app, every interaction with an item will log the message below
    // to remove this action, need to add dependency array so there is any empty array because there are no component values needed
    return () => {
      console.log("Cleaning up...")
    }
  }, [])
  
  return (
    // css modules generate unique class names so prevents selector conflicts
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem