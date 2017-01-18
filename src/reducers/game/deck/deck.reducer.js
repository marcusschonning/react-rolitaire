const initialState = {
  drawn: [],
  notDrawn: [],
};

const deck = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_DECK':
      let cardsIds = Object.keys(action.payload.cards).map(card => parseInt(card));
      return Object.assign({}, state, {
        notDrawn: cardsIds
      });

    case 'DRAW_FROM_DECK':

      let newState = Object.assign({}, state, {
        drawn: state.drawn.concat(action.payload.card.id),
        notDrawn: state.notDrawn.filter(card => {
          return card !== action.payload.card.id
        })
      });
      return newState;

    default:
      return state;
  }
}

export default deck;
