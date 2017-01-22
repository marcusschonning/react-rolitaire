import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';

import SuitComponent from '../../../components/game-board/suits/suit.component';
import { addToSuits } from './../../../actions/game-board.actions';

const mapStateToProps = (state) => {
  return {
    suits: state.game.suits,
    cards: state.game.cardsById,
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
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    // console.log(targetProps)
    if(sourceId !== targetId) {
      //targetProps.onMove({sourceId, targetId});
    }
  },

  drop(targetProps, monitor, component) {
    // let droppedCard = targetProps.cardsById[monitor.getItem().id];
    // if(targetProps.board.length === 0 && droppedCard.value === 13) {
    //   let currentPlacement = targetProps.deck.drawn.indexOf(droppedCard.id) !== -1 ? 'DECK' : 'BOARD';
    //   targetProps.moveKing(targetProps.id, currentPlacement, droppedCard.id)
    // }
    const { id, suits, cards, addToSuits } = targetProps;
    const suitArray = suits[id];
    const cardId = monitor.getItem().id;
    const card = cards[cardId];
    const lastCardInAray = cards[suitArray[suitArray.length-1]];
    console.log('targetProps', targetProps);
    if(suitArray.length === 0 && card.value === 1) {
      console.log('add ace');
      addToSuits(id, cardId);
    } else if(suitArray.length > 0) {
      if(lastCardInAray.value === card.value-1 && lastCardInAray.suit === card.suit) {
        console.log('add card suitArray');
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

