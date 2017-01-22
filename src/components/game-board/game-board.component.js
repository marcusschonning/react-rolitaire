import React, { Component } from 'react';
import './game-board.component.css';
class GameBoardComponent extends Component {
  render() {
    return(
      <div className={'game-board'}>
        <h4>Speeeeeeelet :)</h4>
        {this.props.children}
      </div>
    )
  }
}

export default GameBoardComponent;
