import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteTodo, toggleTodo } from '../actions/actions';

interface ICreateList {
  todos?: [];
  toggleTodo: any;
  deleteTodo: any;
}

class TodoList extends React.Component<ICreateList> {
  render() {
    const todos = this.props.todos.map((item: any, index: number) => (
      <div key={index} >
        <p>{item.text}, {item.completed ? '' : 'not'} completed.</p>
        <button onClick={this.props.toggleTodo.bind(this, item.id)}>Done</button>
        <button onClick={this.props.deleteTodo.bind(this, item.id)}>Remove</button>
      </div >
    ));

    return todos;
  }
}
const mapStateToProps = (state: {}) => state;

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    deleteTodo,
    toggleTodo,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);