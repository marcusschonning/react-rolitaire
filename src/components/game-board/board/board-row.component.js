import React, { Component } from 'react';

import CardContainer from './../../../containers/game-board/card/card.container';
import './board.component.css';


class BoardRowComponent extends Component {
  render() {
    return (
      <div className="board-row">
        <div>Hej</div>
        {this.props.board.map((card, i) => {
          return(
            <div key={card}>
              <CardContainer cardsShowing={this.props.cardsShowing} orderFromLast={i} cardId={card} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default BoardRowComponent;
