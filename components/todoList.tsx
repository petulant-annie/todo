import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { deleteTodo, toggleTodo } from '../actions/actions';

export interface IItem {
  text: string;
  id: number;
  completed: boolean;
  type: string;
}

export interface ICreateList {
  todos?: [];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

class TodoList extends React.Component<ICreateList> {
  createTodos() {
    return (this.props.todos as []).map((item: IItem, index: number) => (
      <div key={index} >
        <p>{item.text}, {item.completed ? '' : 'not'} completed.</p>
        <button onClick={this.props.toggleTodo.bind(this, item.id)}>Done</button>
        <button onClick={this.props.deleteTodo.bind(this, item.id)}>Remove</button>
      </div >
    ));
  }
  render() {
    return (
      <div>{this.createTodos()}</div>
    );
  }
}
const mapStateToProps = (state: {}) => state;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteTodo,
    toggleTodo,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
