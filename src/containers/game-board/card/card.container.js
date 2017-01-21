import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';

import { drawFromDeck, moveCard, turnCard } from './../../../actions/game-board.actions';

import Card from './../../../components/game-board/card/card.component';

const mapStateToProps = (state) => {
  return {
    cardsById: state.game.cardsById,
    deck: state.game.deck,
    board: state.game.board,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (card, deck) => {
      if(deck.notDrawn.indexOf(card.id) !== -1 && deck.notDrawn[deck.notDrawn.length-1] === card.id) {
        dispatch(drawFromDeck(card));
      }
      if(deck.drawn.indexOf(card.id) === -1 && deck.notDrawn.indexOf(card.id) === -1 && !card.show) {
        dispatch(turnCard(card.id));
      }
    },
    moveCard: (targetId, dropId, board) => {
      dispatch(moveCard(targetId, dropId, board));
    }
  }
}

class CardFetcher extends Component {
  render() {

    const { connectDragSource, connectDropTarget, cardsShowing, cardId } = this.props;

    let topValue = 0;
    let negativeTop = 0;
    if( cardsShowing ) {
      negativeTop = cardsShowing.length < 5 ? cardsShowing.length : 5;
      topValue = cardsShowing.indexOf(cardId) > 0 ? ((cardsShowing.indexOf(cardId) * 35) - negativeTop) : 0;
    }
    return compose(connectDragSource, connectDropTarget)(
      <div style={
        {
          'left': this.props.orderFromLast ? this.props.orderFromLast/2 : null,
          'opacity': this.props.isDragging ? 0 : 1,
          'cursor': 'grab',
          height: 180,
          width: 120,
          position: 'absolute',
          top: cardsShowing ? topValue : 0
        }
      }>
        <Card {...this.props} />
      </div>
    )
  }
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.cardId
    };
  }
};

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
    // console.log('drop! targetProps:', targetProps)
    // console.log('monitor', monitor.getItem());
    // console.log(component)
    const { cardsById, cardId, moveCard, board } = component.props;
    const dropId = monitor.getItem().id;

    const dropCard = cardsById[dropId];
    const targetCard = cardsById[cardId];
    if( dropCard.show && targetCard.show && dropCard.value === targetCard.value-1 && dropCard.suitColor !== targetCard.suitColor ) {
      moveCard(cardId, dropId, board);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const CardContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DragSource('card', cardSource, collect),
  DropTarget('card', cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
)(CardFetcher);

export default CardContainer;
