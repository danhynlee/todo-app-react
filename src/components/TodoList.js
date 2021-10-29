import React from "react";

import TodoItem from "./TodoItem";

class TodoList extends React.Component {

  // key attribute gets rid of unique key prop warning in devtools
  // becuase .map() creates a List
  // react wants each child in a list to have unqiue key prop
  // solved by using the id (todo.id) in state data from TodoContainer as key
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    )
  }
}

export default TodoList