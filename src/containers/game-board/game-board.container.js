import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameBoardComponent from './../../components/game-board/game-board.component';
import DeckContainer from './deck/deck.container';

import { setDeck } from './../../actions/deck.action';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDeck: (cards) => {
      dispatch(setDeck(cards));
    }
  }
}

class GameBoardFetcher extends Component {



  render() {
    return(
      <GameBoardComponent {...this.props}>
        <DeckContainer />
      </GameBoardComponent>
    )
  }
}

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoardFetcher);

export default GameBoardContainer;
