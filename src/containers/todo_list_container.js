import { connect } from 'react-redux';
import TodoListComponent from '../components/todo_list';
import { addTodo, toggleTodo } from '../actions/todo_actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(TodoListComponent);