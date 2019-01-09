import React from 'react';
import { Link } from 'react-router';

function StartScreenComponent () {
  return (
    <div>
      <h1>Välkommen...</h1>
      <Link to="/game">Starta</Link>
    </div>
  );
}

export default StartScreenComponent;
