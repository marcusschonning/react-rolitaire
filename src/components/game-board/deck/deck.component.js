import React, { Component } from 'react';

import CardContainer from './../../../containers/game-board/card/card.container';
import './deck.component.css';

class DeckComponent extends Component {
  render() {
    return(
      <div className="deck">
        <div className="pile not-drawn-cards">
          {
            this.props.deck.notDrawn.map((cardId, i) => {
              return <CardContainer key={i} orderFromLast={i} cardId={cardId} />
            })
          }
        </div>
        <br/>
        <div className="pile drawn-cards">
          {
            this.props.deck.drawn.map((cardId, i) => {
              return <CardContainer key={i} orderFromLast={i} cardId={cardId} />
            })
          }
        </div>
      </div>
    )
  }
}

export default DeckComponent;
