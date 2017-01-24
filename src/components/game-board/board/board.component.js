import React, { Component } from 'react';

import BoardRowContainer from './../../../containers/game-board/board/board-row.container';
import './board.component.css';


class BoardComponent extends Component {
  render() {
    return (
      <div className="board">
        <div className="board-rows">
          {Object.keys(this.props.board).map(row => {
            return (
              <BoardRowContainer key={row} id={row} boardRow={this.props.board[row]} cardsShowing={this.props.cardsShowing[row]} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default BoardComponent;
