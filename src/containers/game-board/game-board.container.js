import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GameBoardComponent from './../../components/game-board/game-board.component';
import DeckContainer from './deck/deck.container';
import BoardContainer from './board/board.container';
import SuitsContainer from './suits/suits.container';

import { startGame } from './../../actions/game-board.actions';

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (cards) => {
      dispatch(startGame(cards));
    },
  }
}

class GameBoardFetcher extends Component {

  componentDidMount() {
    this.props.startGame(this.props.game.cardsById);
  }

  render() {
    return(
      <GameBoardComponent {...this.props}>
        <DeckContainer />
        <SuitsContainer />
        <BoardContainer />
      </GameBoardComponent>
    )
  }
}
GameBoardFetcher = DragDropContext(HTML5Backend)(GameBoardFetcher);

const GameBoardContainer = compose(
  DragDropContext(HTML5Backend),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GameBoardFetcher)

export default GameBoardContainer;
