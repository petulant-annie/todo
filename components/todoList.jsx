import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteTodo } from '../actions/actions';

class TodoList extends React.Component {
  onDeleteText = (id) => {
    this.props.deleteTodo(id);
  }
  render() {
    const todos = this.props.todos.map((item, index) => (
      <div key={index}>
        <p>{item.id + 1}: {item.text}, {item.completed ? '' : 'not'} completed.</p>
        <button>Done</button>
        <button onClick={this.onDeleteText(item.id)}>Remove</button>
      </div>
    ));
    return todos;
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTodo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
