import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';

import { drawFromDeck, moveCard } from './../../../actions/game-board.actions';

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
    },
    moveCard: (targetId, dropId, board) => {
      dispatch(moveCard(targetId, dropId, board));
    }
  }
}

class CardFetcher extends Component {
  render() {
    const { connectDragSource, connectDropTarget } = this.props;
    return compose(connectDragSource, connectDropTarget)(
      <div style={{height: 180, width: 120, position: 'absolute'}}>
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

const noteTarget = {
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
  DropTarget('card', noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
)(CardFetcher);

export default CardContainer;
