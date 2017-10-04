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
    return;
  },

  drop(targetProps, monitor, component) {
    const { id, suits, cards, addToSuits, board } = targetProps;
    const suitArray = suits[id];
    const cardId = monitor.getItem().id;
    const card = cards[cardId];
    const lastCardInAray = cards[suitArray[suitArray.length-1]];

    let cardOnBoard = false;
    let cardPlacementOnBoard;
    for(let key in board) {
      if(board[key].indexOf(cardId) !== -1) {
        cardOnBoard = true;
        if(board[key][board[key].length-1] === cardId) {
          cardPlacementOnBoard = key;
        }
      }
    }

    if(suitArray.length === 0 && card.value === 1) {
      addToSuits(id, cardId);
    } else if(suitArray.length > 0) {
      if(lastCardInAray.value === card.value-1 && lastCardInAray.suit === card.suit) {
        if(cardOnBoard) {
          if(cardPlacementOnBoard) {
            addToSuits(id, cardId);
          }
        } else {
          addToSuits(id, cardId);
        }
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

