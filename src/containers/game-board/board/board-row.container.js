import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';

import { moveKing } from './../../../actions/game-board.actions';

import BoardRowComponent from '../../../components/game-board/board/board-row.component';


const mapStateToProps = (state) => {
  return {
    boards: state.undoableGame.present.board,
    deck: state.undoableGame.present.deck,
    cardsById: state.undoableGame.present.cardsById,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveKing: (targetRow, currentPlacement, cardId) => {
      dispatch(moveKing(targetRow, currentPlacement, cardId));
    },
  }
}

class BoardFetcher extends Component {
  render() {
    const { connectDropTarget } = this.props
    return connectDropTarget(
      <div>
        <BoardRowComponent {...this.props} />
      </div>
    )
  }
}

const cardTarget = {
  hover(targetProps, monitor) {
    //show avialable target rows for dragged
  },

  drop(targetProps, monitor, component) {
    let droppedCard = targetProps.cardsById[monitor.getItem().id];
    if(targetProps.board.length === 0 && droppedCard.value === 13) {
      let currentPlacement = targetProps.deck.drawn.indexOf(droppedCard.id) !== -1 ? 'DECK' : 'BOARD';
      targetProps.moveKing(targetProps.id, currentPlacement, droppedCard.id)
    }
  }
};

const BoardContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DropTarget('card', cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
)(BoardFetcher);

export default BoardContainer;
