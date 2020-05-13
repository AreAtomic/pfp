import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='card'>
        <img src={this.props.src} alt='photo' />
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}
