import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer } from './../../../containers';
import './deck.component.css';

DeckComponent.propTypes = {
  resetDeck: PropTypes.func.isRequired,
  deck: PropTypes.object.isRequired,
}
function DeckComponent ({resetDeck, deck}) {
  return(
    <div className="deck">
      <div className="pile not-drawn-cards">
        <div className="card" onClick={() => resetDeck(deck)}></div>
        {
          deck.notDrawn.map((cardId, i) => {
            return <CardContainer key={cardId} orderFromLast={i} cardId={cardId} />
          })
        }
      </div>
      <br/>
      <div className="pile drawn-cards">
        {
          deck.drawn.map((cardId, i) => {
            return <CardContainer key={cardId} orderFromLast={i} cardId={cardId} />
          })
        }
      </div>
    </div>
  )
}

export default DeckComponent;
