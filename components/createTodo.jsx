import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/actions';


class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.onChangeTodoText = this.onChangeTodoText.bind(this);
  }

  onChangeTodoText(e) {
    this.setState({
      text: e.target.value,
    });
  }

  onChangeText = (e) => {
    this.props.addTodo(this.state.text, this.props.id);
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
        <form onChange={this.onChangeTodoText}>
          <input type="text" placeholder="what to do?" />
          <button type="submit" onClick={this.onChangeText}>Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.todos.length };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
