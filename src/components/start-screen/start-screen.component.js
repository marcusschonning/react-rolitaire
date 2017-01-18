import React, { Component } from 'react';
import { Link } from 'react-router';

class StartScreenComponent extends Component {
  render() {
    return (
      <div>
        <h1>Välkommen...</h1>
        <Link to="/game">Starta</Link>
      </div>
    );
  }
}

export default StartScreenComponent;
