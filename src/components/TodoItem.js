import React from "react";

// class based component
class TodoItem extends React.Component {
    render() {
        return <li>{this.props.todo.title}</li>
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