import * as React from 'react';

import store from '../store';

// eslint-disable-next-line react/prefer-stateless-function
class TodoList extends React.Component {
  render() {
    const list = [store.children];
    return (
      <p>{list}</p>
    );
  }
}

export default TodoList;
