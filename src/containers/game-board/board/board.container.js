import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardComponent from '../../../components/game-board/board/board.component';

const mapStateToProps = (state) => {
  let cardsShowing = {};
  Object.keys(state.undoableGame.present.board).map(row => {
    cardsShowing[row] = []
    state.undoableGame.present.board[row].map(card => {
      if(state.undoableGame.present.cardsById[card].show) {
        cardsShowing[row].push(card);
      }
      return card;
    })
    return row;
  })
  return {
    board: state.undoableGame.present.board,
    cardsShowing: cardsShowing,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    test: () => {
      console.log('test');
    },
  }
}

class BoardFetcher extends Component {
  render() {
    return(
      <BoardComponent {...this.props} />
    )
  }
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardFetcher);

export default BoardContainer;
