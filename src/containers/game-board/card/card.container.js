import React, { Component } from 'react';
import { connect } from 'react-redux';

import { drawFromDeck } from './../../../actions/card.action';

import Card from './../../../components/game-board/card/card.component';

const mapStateToProps = (state) => {
  return {
    cardsById: state.game.cardsById
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (card) => {
      if(card.placement === 'DECK_NOT_DRAWN') {
        dispatch(drawFromDeck(card));
      }
    }
  }
}

class CardFetcher extends Component {

  render() {
    return(
      <Card {...this.props} />
    )
  }
}

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFetcher);

export default CardContainer;
