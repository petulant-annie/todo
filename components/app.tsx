import * as React from 'react';

import CreateTodo from './createTodo';
import TodoList from './todoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <CreateTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
