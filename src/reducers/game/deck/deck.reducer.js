const initialState = {
  drawn: [],
  notDrawn: [],
};

const deck = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        notDrawn: action.payload.cardsInDeck
      };

    case 'DRAW_FROM_DECK':
      return {
        ...state,
        drawn: state.drawn.concat(action.payload.card.id),
        notDrawn: state.notDrawn.filter(card => {
          return card !== action.payload.card.id
        })
      };

    case 'RESET_DECK':
      let resetNotDrawn = action.payload.deck.drawn.reverse();
      return {
        ...state,
        drawn: [],
        notDrawn: resetNotDrawn,
      };

    case 'MOVE_CARD':
      let { currentPlace, cardId } = action.payload;
      if(currentPlace === 'DECK') {
        return {
          ...state,
          drawn: state.drawn.filter(card => card !== cardId)
        };
      };
      return state;

      case 'ADD_TO_SUITS':
        if(state.drawn.indexOf(action.payload.cardId) !== -1) {
          return {
            ...state,
            drawn: state.drawn.slice(0, state.drawn.indexOf(action.payload.cardId))
          };
        } else {
          return state;
        }
    default:
      return state;
  }
}

export default deck;
