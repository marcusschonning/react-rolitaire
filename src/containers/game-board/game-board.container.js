import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { GameBoardComponent } from './../../components';

import { startGame, stopTimer } from './../../actions/game-board.actions';

const mapStateToProps = ({ undoableGame, timer }) => {
  const cardsDone = Object.keys(undoableGame.present.suits).map((arr) => {
    return undoableGame.present.suits[arr].length;
  }).reduce((total, len) => {
    return total + len;
  }, 0);
  const finnished = cardsDone === 52;
  return {
    game: undoableGame.present,
    canUndo: undoableGame.past.length > 1,
    canRedo: undoableGame.future.length > 0,
    finnished,
    timer,
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

class GameBoardContainer extends Component {

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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DragDropContext(HTML5Backend),
)(GameBoardContainer);
