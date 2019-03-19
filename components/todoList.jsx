import * as React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/actions';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map((item, index) => (
      <div key={index}>
        <p>{item.id + 1}: {item.text}, {item.completed ? '' : 'not'} completed.</p>
        <button>Done</button>
        <button onClick={deleteTodo}>Remove</button>
      </div>
    ));
    return todos;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TodoList);
