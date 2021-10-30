import React from "react";

// css modules
// styles is a JavaScript object
// classes are selected by styles.classSelector
import styles from "./TodoItem.module.css";

// class based component
class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  componentWillUnmount() {
    console.log("cleaning up ...")
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    // deconstructed this.props.todo to remove redundancy
    const { completed, id, title } = this.props.todo

    return (
      // css modules generate unique class names so prevents selector conflicts
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={e => {
            this.props.setUpdate(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    )
  }
}


// function based component
// does not require render()
// this.props => props
// props now passed in as parameter of function
// React Hooks allow for function components to handle state data (previously unable to)
// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
// }

export default TodoItem