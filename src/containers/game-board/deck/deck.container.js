import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeckComponent from '../../../components/game-board/deck/deck.component';
import { setDeck } from './../../../actions/deck.action';

const mapStateToProps = (state) => {
  return {
    deck: state.game.deck,
    cardsById: state.game.cardsById
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDeck: (cards) => {
      dispatch(setDeck(cards))
    }
  }
}

class DeckFetcher extends Component {
  componentDidMount() {
    //shuffle deck and init game.
    this.props.setDeck(this.props.cardsById);
  }

  render() {
    return <DeckComponent {...this.props}/>
  }
}

const DeckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckFetcher);

export default DeckContainer;
