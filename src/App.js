import React from 'react';
import { BrowserRouter as Router, Route }   from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import Header from './components/layouts/header';
import AddTodo from './components/AddTodo';
import uid from 'uuid';
import About from './components/pages/About';
import Axios from 'axios';

class App extends React.Component{
  state = {
    todo: []
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=50')
    .then(response =>{
      console.log(response);
      this.setState({
        todo: response.data
      })
    })
  }
  
  //toggle completed
  markComplete = (id)=>{
    this.setState({todo: this.state.todo.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    })
  })
  }

  //Delete in TodoList
  delete = (id)=>{
    this.setState({todo: this.state.todo.filter((todo)=>{
     
      if(todo.id !== id)
      {
        return todo
      }
    })
  })
 }

 //Add in TodoList
 addTodo = (title) => {
  console.log(title)
  const newTodo = {
    id: uid.v4(),
    title,
    completed: false
  }
  this.setState({todo: [...this.state.todo,newTodo]})
 }

  render(){
    return (
      <Router>
          <div className="App">
            <Header />
            <Route exact path="/"  render = {props =>(
              <React.Fragment>
                 <AddTodo addTodo={this.addTodo} />
                 <Todo todos={this.state.todo} markComplete={this.markComplete} delete={this.delete}/>
              </React.Fragment>
            )} />
            <Route path="/about" component = {About} />
          </div>
      </Router>
    );
  }
}

export default App;
