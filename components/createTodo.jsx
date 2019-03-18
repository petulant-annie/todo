import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/actions';
import { todos } from './../redusers/addTodoReduser';


class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };

    // this.onChangeTodoText = this.addOnClick.bind(this);
  }

  onChangeText = (e) => {
    this.props.addTodo(this.state.text, todos.state.length);
    this.setState({
      text: e.target.value,
    });
  }

  // addOnClick = (e) => {

  // }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onChange={this.onChangeText}>
          <input type="text" placeholder="what to do?" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreateTodo);
