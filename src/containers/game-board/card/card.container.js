import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';

import { drawFromDeck, moveCard, turnCard } from './../../../actions/game-board.actions';

import Card from './../../../components/game-board/card/card.component';

const mapStateToProps = (state) => {
  return {
    cardsById: state.undoableGame.present.cardsById,
    deck: state.undoableGame.present.deck,
    board: state.undoableGame.present.board,
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

    const { connectDragSource, cardsShowing, cardId } = this.props;

    let topValue = 0;
    let negativeTop = 0;
    if( cardsShowing ) {
      negativeTop = cardsShowing.length < 5 ? cardsShowing.length : 5;
      topValue = cardsShowing.indexOf(cardId) > 0 ? ((cardsShowing.indexOf(cardId) * 35) - negativeTop) : 0;
    }
    return connectDragSource(
      <div style={
        {
          'left': this.props.orderFromLast ? this.props.orderFromLast/2 : null,
          'opacity': this.props.isDragging ? 0 : 1,
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
  },
  canDrag(props, monitor) {
    return props.cardsById[props.cardId].show;
  },
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
)(CardFetcher);

export default CardContainer;
