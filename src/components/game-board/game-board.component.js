import React, { Component } from 'react';

import DeckContainer from './../../containers/game-board/deck/deck.container';
import BoardContainer from './../../containers/game-board/board/board.container';
import SuitsContainer from './../../containers/game-board/suits/suits.container';

import './game-board.component.css';

class GameBoardComponent extends Component {
  render() {
    return(
      <div className={'game-board'}>
        <div>
          <button onClick={() => this.props.startGame(this.props.game.cardsById)}>Restart</button>
          <button disabled={!this.props.canUndo} onClick={this.props.undo}>Undo</button>
          <button disabled={!this.props.canRedo} onClick={this.props.redo}>Redo</button>
          <p>{this.props.timer.timeStr}</p>
        </div>
        {this.props.finnished ?
          //
          <div>
            <h1>Grattis!</h1>
            <p>Du klarade speled på
              <strong>{this.props.timer.hrs ? this.props.timer.hrs + ' hrs' : null}</strong>
              <strong>{this.props.timer.min ? this.props.timer.min + ' min' : null}</strong>
              <strong>{this.props.timer.sec ? this.props.timer.sec + ' sec' : null}</strong>
            </p>
          </div> :
          //
          <div>
            <DeckContainer />
            <SuitsContainer />
            <BoardContainer />
          </div>
        }
      </div>
    )
  }
}

export default GameBoardComponent;
