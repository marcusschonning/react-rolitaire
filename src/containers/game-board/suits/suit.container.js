import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';

import SuitComponent from '../../../components/game-board/suits/suit.component';
import { addToSuits } from './../../../actions/game-board.actions';

const mapStateToProps = (state) => {
  return {
    suits: state.undoableGame.present.suits,
    cards: state.undoableGame.present.cardsById,
    board: state.undoableGame.present.board,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToSuits: (suitsId, cardId) => {
      dispatch(addToSuits(suitsId, cardId));
    }
  }
}

class SuitFetcher extends Component {
  render() {
    return this.props.connectDropTarget(
      <div>
        <SuitComponent {...this.props}/>
      </div>
    )
  }
}

const cardTarget = {
  hover(targetProps, monitor) {
    return
  },

  drop(targetProps, monitor, component) {
    const { id, suits, cards, addToSuits } = targetProps;
    const suitArray = suits[id];
    const cardId = monitor.getItem().id;
    const card = cards[cardId];
    const lastCardInAray = cards[suitArray[suitArray.length-1]];

    if(suitArray.length === 0 && card.value === 1) {
      addToSuits(id, cardId);
    } else if(suitArray.length > 0) {
      if(lastCardInAray.value === card.value-1 && lastCardInAray.suit === card.suit) {
        addToSuits(id, cardId);
      }
    }
  }
};


const SuitContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DropTarget('card', cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
)(SuitFetcher);

export default SuitContainer;

