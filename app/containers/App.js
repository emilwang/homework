import React, {Component, PropTypes} from 'react';
import { connect} from 'react-redux';
import * as actions from '../actions'
import {bindActionCreators} from 'redux'

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text){
    this.props.actions.addTodo(text);
  }

  render() {
    const {todos,filter,actions} = this.props;
    return ( 
      < div >
        < AddTodo 
          onAddClick = {this.addTodo}/> 
        < TodoList 
          todos={todos}
          onTodoClick = {(index)=>{actions.completeTodo(index)}}/> 
        < Footer 
          filter={filter} 
          onFilterChange ={(filter)=>{actions.setTodoFilter(filter)}}/> 
     < /div >
   );
  }
}

App.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string.isRequired
};

function filterTodos(todos,filter){
  const type  = actions.TodoFilters;
  switch(filter){
    case type.SHOW_ALL :
      return todos;
    case type.SHOW_COMPLETED:
    return todos.filter((todo)=>{return todo.completed});
     case type.SHOW_ACTIVE :
    return todos.filter((todo)=>{return !todo.completed});; 
  }
}

function mapStateToProps(state) {
  return {
    todos: filterTodos(state.todos,state.filter),
    filter:state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);