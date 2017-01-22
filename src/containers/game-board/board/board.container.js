import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardComponent from '../../../components/game-board/board/board.component';

const mapStateToProps = (state) => {
  let cardsShowing = {};
  Object.keys(state.game.board).map(row => {
    cardsShowing[row] = []
    state.game.board[row].map(card => {
      if(state.game.cardsById[card].show) {
        cardsShowing[row].push(card);
      }
      return card;
    })
    return row;
  })
  return {
    board: state.game.board,
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
