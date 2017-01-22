import React, { Component } from 'react';
import CardContainer from './../../../containers/game-board/card/card.container';

class SuitComponent extends Component {
  render() {
    const cards = this.props.suits[this.props.id];
    return(
      <div className="suitRow">
        <div className="card"></div>
        {
          cards.map(card => {
            return(
              <CardContainer key={card} cardId={card} />
            )
          })
        }
      </div>
    )
  }
}

export default SuitComponent;
