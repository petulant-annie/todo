import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { todos } from './reduсers/addTodoReduсer';

const store = createStore(
  combineReducers({
    todos,
  }),
  {},
  applyMiddleware(logger),
);

export default store;
