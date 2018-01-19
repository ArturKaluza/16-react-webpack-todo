const React = require('react');
import uuid from 'uuid';

class TodoList extends React.Component {
    removeTodo(e) {
    console.log('hey');
      let id = e.target.closest('li').getAttribute('data-id');
    
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    console.log(this.state.data);
  }
  
  render() {
    return (
      <div className="todoList">
        <ul>
          {this.props.array.map(task => <li key={task.id} data-id={task.id}>{task.text}<span onClick={this.props.remLi}>X</span></li>)}
        </ul>
      </div>
    )
  };
}

export default TodoList;