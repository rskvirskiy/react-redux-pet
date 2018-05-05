import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import {TodoList} from './containers/todo_list_container';

import { createStore } from 'redux';
import todo_reducer from './reducers/todo_reducer';

const store = createStore(todo_reducer);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
);
