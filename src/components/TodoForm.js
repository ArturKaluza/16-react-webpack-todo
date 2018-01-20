import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
render() {
  return (
    <form onSubmit={this.props.add} className={style.entry} >
      <input type="text" name="task" />
      <button type="submit">Add new task</button>
    </form>
    )
  }
}

export default TodoForm;