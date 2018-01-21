import React from 'react';
import uuid from 'uuid';

class Todo extends React.Component {
  render() {
    return (
      <li data-id={this.props.id}>{this.props.task.text}<button onClick={this.props.remLi}>X</button></li>
    )
  }
}

export default Todo;