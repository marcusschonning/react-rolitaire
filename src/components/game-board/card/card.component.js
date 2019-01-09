import React from 'react';
import PropTypes from 'prop-types';

import './card.component.css';

CardComponent.propTypes = {
  cardClickAction: PropTypes.func.isRequired,
  deck: PropTypes.object.isRequired,
  cardsById: PropTypes.object.isRequired,
  cardId: PropTypes.number.isRequired,
};
function CardComponent({ cardClickAction, deck, cardId, cardsById, }) {
  const handleClick = (card) => {
    cardClickAction(card, deck);
  }
  const id = cardId;
  const card = cardsById[id];
  let cardValue;

  switch (card.value) {
    case 1:
      cardValue = 'A';
      break;
    case 11:
      cardValue = 'J';
      break;
    case 12:
      cardValue = 'Q';
      break;
    case 13:
      cardValue = 'K';
      break;
    default:
      cardValue = card.value;
  }

  if (card.show && deck.drawn.indexOf(id) === -1) {
    // change top positioning if cards are stacked
  }

  return (
    <div className="card" onClick={() => handleClick(card)} >
      <div className={card.show ? 'face ' + card.suit : 'back'}>
        <div className="card-value top">
          <div>{cardValue}</div>
          <div className={'suit ' + card.suit}></div>
        </div>
        <div className={'large suit ' + card.suit}></div>
        <div className="card-value bottom">
          <div>{cardValue}</div>
          <div className={'suit ' + card.suit}></div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent;
