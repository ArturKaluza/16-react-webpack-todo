const React = require('react');
import style from './TodoList.css';
import uuid from 'uuid';
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return (
      <div className={style.todoList}>
        <ul>
          {this.props.array.map(task => <Todo key={task.id} id={task.id} task={task} remLi={this.props.remLi} />)}
        </ul>
      </div>
    )
  };
}

export default TodoList;


