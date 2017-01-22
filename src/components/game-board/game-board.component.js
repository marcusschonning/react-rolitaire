import React, { Component } from 'react';
import './game-board.component.css';
class GameBoardComponent extends Component {
  render() {
    return(
      <div className={'game-board'}>
        <button onClick={() => this.props.startGame(this.props.game.cardsById)}>Starta om</button>
        {this.props.children}
      </div>
    )
  }
}

export default GameBoardComponent;
