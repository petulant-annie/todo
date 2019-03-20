import { createStore, combineReducers, applyMiddleware } from 'redux';

import { todos } from './reduсers/todoReducers';
import todoLogger from './middlewares/todoMiddleware';

const store = createStore(
  combineReducers({
    todos,
  }),
  {},
  applyMiddleware(todoLogger),
);

export default store;
