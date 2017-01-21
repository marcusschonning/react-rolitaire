import React, { Component } from 'react';

import CardContainer from './../../../containers/game-board/card/card.container';
import './board.component.css';


class BoardComponent extends Component {
  render() {
    return (
      <div>
        <h1>Board!</h1>
        <div className="board-rows">
          {Object.keys(this.props.board).map((row, i) => {
            return (
              <div className="board-row" key={i}>
                {this.props.board[row].map((card, j) => {
                  return(
                    <div key={card}>
                      <CardContainer orderFromLast={j} cardId={card} />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default BoardComponent;
