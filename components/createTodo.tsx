import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo } from '../actions/actions';
import { IActionCreator, IItem, ICreateList } from './todoList';

interface ICreateTodo {
  id: number;
  addTodo: any;
}

interface IStateTodo {
  text: string;
}

class CreateTodo extends React.Component<ICreateTodo, IStateTodo> {
  constructor(props: Readonly<ICreateTodo>) {
    super(props);
    this.state = {
      text: '',
    };

  }

  onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value,
    });
  }

  onChangeText = (e: React.MouseEvent) => {
    this.props.addTodo(this.state.text, this.props.id);
    this.setState({
      text: (e.target as HTMLTextAreaElement).value,
    });
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <div>
          <input
            onChange={this.onChangeTodoText}
            value={this.state.text}
            type="text"
            placeholder="what to do?"
          />
          <button onClick={this.onChangeText}>Add Todo</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ICreateList) => ({ id: state.todos.length });

const mapDispatchToProps = (dispatch: IActionCreator<IItem>) => bindActionCreators(
  {
    addTodo,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
