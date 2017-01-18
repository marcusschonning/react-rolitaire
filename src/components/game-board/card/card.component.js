import React, { Component, PropTypes } from 'react';
import './card.component.css';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(card) {
    this.props.handleClick(card)
  }

  render() {

    const id = this.props.cardId;
    const card = this.props.cardsById[id];
    let cardValue;

    switch(card.value) {
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

    return(
      <div className="card" onClick={() => this.props.handleClick(card)} style={
        {
          left: this.props.orderFromLast ? this.props.orderFromLast/2 : null
        }
      }>
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
};

CardComponent.propTypes = {
  cardsById: PropTypes.object,
  cardId: PropTypes.number
};

export default CardComponent;
