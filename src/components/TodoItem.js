import React from "react";

// css modules
// styles is a JavaScript object
// classes are selected by styles.classSelector
import styles from "./TodoItem.module.css"

// class based component
class TodoItem extends React.Component {
  render() {
    return (
      // css modules generate unique class names so prevents selector conflicts
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button> {this.props.todo.title}
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