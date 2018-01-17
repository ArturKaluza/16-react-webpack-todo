import React from 'react';
import style from './Title.css';

class Title extends React.Component {
  render() {
    return (
      <div className='title'>
        <h1>ToDo App</h1>
        <p>Liczba zadań do wykonania: {this.props.number}</p>
      </div>
    );
  }
}

export default Title;