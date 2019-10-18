import React from 'react';
import TodoItem from './Todoitem';
import propTypes from 'prop-types';

class Todo extends React.Component{
 
  render(){
    return this.props.todos.map((todo)=>(
        <TodoItem key={todo.id} todo = {todo} markComplete={this.props.markComplete} delete={this.props.delete}/>
    ))
  }
}

//PropTypes
Todo.prototypes = {
    todos : propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    delete: propTypes.func.isRequired
}
export default Todo;
