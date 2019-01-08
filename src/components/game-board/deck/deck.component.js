import React, { Component } from 'react';

import { CardContainer } from './../../../containers';
import './deck.component.css';

class DeckComponent extends Component {
  render() {
    return(
      <div className="deck">
        <div className="pile not-drawn-cards">
          <div className="card" onClick={() => this.props.resetDeck(this.props.deck)}></div>
          {
            this.props.deck.notDrawn.map((cardId, i) => {
              return <CardContainer key={cardId} orderFromLast={i} cardId={cardId} />
            })
          }
        </div>
        <br/>
        <div className="pile drawn-cards">
          {
            this.props.deck.drawn.map((cardId, i) => {
              return <CardContainer key={cardId} orderFromLast={i} cardId={cardId} />
            })
          }
        </div>
      </div>
    )
  }
}

export default DeckComponent;
