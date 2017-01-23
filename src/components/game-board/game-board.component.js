import React, { Component } from 'react';
import './game-board.component.css';
class GameBoardComponent extends Component {
  render() {
    return(
      <div className={'game-board'}>
        <div>
          <button onClick={() => this.props.startGame(this.props.game.cardsById)}>Restart</button>
          <button disabled={!this.props.canUndo} onClick={this.props.undo}>Undo</button>
          <button disabled={!this.props.canRedo} onClick={this.props.redo}>Redo</button>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default GameBoardComponent;
