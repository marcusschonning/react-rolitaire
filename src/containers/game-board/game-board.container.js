import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GameBoardComponent from './../../components/game-board/game-board.component';

import { startGame, stopTimer } from './../../actions/game-board.actions';

const mapStateToProps = (state) => {
  let cardsDone = Object.keys(state.undoableGame.present.suits).map((arr) => {
    return state.undoableGame.present.suits[arr].length;
  }).reduce((total, len) => {
    return total + len;
  }, 0);
  let finnished = cardsDone + 51 === 52;
  return {
    game: state.undoableGame.present,
    canUndo: state.undoableGame.past.length > 1,
    canRedo: state.undoableGame.future.length > 0,
    finnished: finnished,
    timer: state.timer,
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
    stopTimer: () => {
      dispatch(stopTimer());
    }
  }
}

class GameBoardFetcher extends Component {

  componentDidMount() {
    this.props.startGame(this.props.game.cardsById);
  }

  componentWillReceiveProps() {
    if(this.props.finnished && this.props.timer.timerActive) {
      this.props.stopTimer();
    }
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
