import React from 'react';
import style from './Title.css';

class Title extends React.Component {
  render() {
    return (
      <div className={style.title}>
        <h1>ToDo App</h1>
        <p>Number of tasks: {this.props.number}</p>
      </div>
    );
  }
}

export default Title;