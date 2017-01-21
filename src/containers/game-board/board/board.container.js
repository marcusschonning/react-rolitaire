import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardComponent from '../../../components/game-board/board/board.component';

const mapStateToProps = (state) => {
  return {
    board: state.game.board
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
