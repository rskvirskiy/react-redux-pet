import React from 'react';

class Todo extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { todo } = this.props;

    if(todo.isDone) {
      return <strike>{todo.text}</strike>;
    } else {
      return <span>{todo.text}</span>;
    }
  }
}

export default Todo;