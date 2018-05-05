import React from 'react';
import Todo from './todo';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }

  onSubmit (event) {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      this.props.addTodo(text);
    }
  }

  render () {
    const { todos, toggleTodo } = this.props;
    const toggleClick = id => () => toggleTodo(id);

    return (
      <div className='todo'>
        <input type='text'
          className='todo__entry'
          placeholder='Add todo'
          onKeyDown={this.onSubmit.bind(this)} />
        <ul className='todo__list'>
          {todos.map(t => (
            <li key={t.get('id')}
              className='todo__item'
              onClick={toggleClick(t.get('id'))}>
              <Todo todo={t.toJS()} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;