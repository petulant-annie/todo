import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { todos } from './redusers/addTodoReduser';

const store = createStore(
  combineReducers({
    todos,
  }),
  {},
  applyMiddleware(logger),
);

store.subscribe(() => {
  console.log('Store changed: ', store.getState());
});

export default store;
