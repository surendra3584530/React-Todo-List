import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    change = (e)=> this.setState({[e.target.title] : e.target.value});

    submit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
           <form onSubmit={this.submit} style={{display: 'flex'}}>
               <input 
                 type="text" 
                 title="title"
                 style = {{flex: '10',padding: '5px'}} 
                 placeholder="Add Todo..."
                 value = {this.state.title}
                 onChange = {this.change}
               />
               <input 
                 type="submit" 
                 value="Submit" 
                 className="btn"
                 style = {{flex: '1'}}
               />
           </form>
        )
    }
}

AddTodo.prototypes = {
   addTodo: PropTypes.func.isRequired 
}

export default AddTodo
