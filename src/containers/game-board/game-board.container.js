import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GameBoardComponent from './../../components/game-board/game-board.component';

import { startGame } from './../../actions/game-board.actions';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    game: state.undoableGame.present,
    canUndo: state.undoableGame.past.length > 1,
    canRedo: state.undoableGame.future.length > 0,
    actions: state.undoableGame.past.length-1,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (cards) => {
      dispatch(startGame(cards));
    },
    undo: () => {
      dispatch(UndoActionCreators.undo());
    },
    redo: () => {
      dispatch(UndoActionCreators.redo())
    },
  }
}

class GameBoardFetcher extends Component {

  componentDidMount() {
    this.props.startGame(this.props.game.cardsById);
  }

  render() {
    return(
      <GameBoardComponent {...this.props} />
    )
  }
}

const GameBoardContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DragDropContext(HTML5Backend),
)(GameBoardFetcher)

export default GameBoardContainer;
