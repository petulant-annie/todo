import * as React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map((item, index) => {
      return (
        <p key={index}>{item.id + 1}: {item.text}, {item.completed ? '' : 'not'} completed.</p>
      );
    });
    return todos;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TodoList);
