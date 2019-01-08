import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DeckComponent } from '../../../components';
import { resetDeck } from './../../../actions/game-board.actions';

const mapStateToProps = (state) => {
  return {
    deck: state.undoableGame.present.deck,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetDeck: (deck) => {
      dispatch(resetDeck(deck));
    }
  }
}

class DeckFetcher extends Component {
  render() {
    return <DeckComponent {...this.props}/>
  }
}

const DeckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckFetcher);

export default DeckContainer;
