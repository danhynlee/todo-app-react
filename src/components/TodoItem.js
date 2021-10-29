import React from "react";

// class based component
class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
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