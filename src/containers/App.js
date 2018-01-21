import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './../components/Title.js';
import TodoList from './../components/TodoList.js';
import TodoForm from './../components/TodoForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    

    this.state = {
      data: [{
        id: 1,
        text: 'clean room'
        }, {
        id: 2,
        text: 'wash the dishes'
        }, {
        id: 3,
        text: 'feed my cat'
        }]
    };
  }

  addTodo(e) {
    e.preventDefault();
    let val = e.target.elements.task.value.trim();
    e.target.elements.task.value = '';
    if (val){
      const todo = {
        text: val,
        id: uuid.v4(),
      };
      const data = [...this.state.data, todo];
      this.setState({data});
    }
  }
  
  removeTodo(e) {
    let id = e.target.closest('li').getAttribute('data-id');
    const remainder = this.state.data.filter(todo => todo.id.toString() !== id);
    this.setState({data: remainder});
  }
  
  render() {
    
    return (
      <div className={style.TodoApp}>
        <Title number={this.state.data.length} />
        <TodoList array={this.state.data} id={this.state.data.id} remLi={this.removeTodo} />
        <TodoForm add={this.addTodo} />
      </div>
    );
  }
}

export default App;