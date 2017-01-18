import React, { Component } from 'react';

class GameBoardComponent extends Component {
  render() {
    return(
      <div>
        <h4>Speeeeeeelet :)</h4>
        <button onClick={this.props.test}>Test</button>
        {this.props.children}
      </div>
    )
  }
}

export default GameBoardComponent;
