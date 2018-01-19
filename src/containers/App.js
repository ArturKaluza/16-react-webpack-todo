import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './../components/Title.js';
import TodoList from './../components/TodoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);


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

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  
  removeTodo(e) {
    let id = e.target.closest('li').getAttribute('data-id');
    console.log(id);
    const remainder = this.state.data.filter(todo => todo.id.toString() !== id);
    this.setState({data: remainder});
    console.log(this.state.data);
  }
  
  render() {
    return (
      <div className={style.TodoApp}>
        <Title number={this.state.data.length}/>
        <TodoList array={this.state.data} remLi={this.removeTodo} />
      </div>
    );
  }
}

export default App;