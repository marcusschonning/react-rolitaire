const initialState = {
  drawn: [],
  notDrawn: [],
};

const deck = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      return Object.assign({}, initialState, {
        notDrawn: action.payload.cardsInDeck
      })

    case 'DRAW_FROM_DECK':
      let newState = Object.assign({}, state, {
        drawn: state.drawn.concat(action.payload.card.id),
        notDrawn: state.notDrawn.filter(card => {
          return card !== action.payload.card.id
        })
      });
      return newState;

    case 'RESET_DECK':
      let resetNotDrawn = action.payload.deck.drawn.reverse();
      return Object.assign({}, state, {
        drawn: [],
        notDrawn: resetNotDrawn,
      });

    case 'MOVE_CARD':
      let { dropId } = action.payload;
      let newDrawn = state.drawn.indexOf(dropId) !== -1 ? state.drawn.slice(0, state.drawn.indexOf(action.payload.dropId)) : state.drawn;
      return Object.assign({}, state, {
        ...state,
        drawn: newDrawn
      });

      case 'MOVE_KING':
        if(action.payload.currentPlace !== 'DECK') {
          return state
        }
        return Object.assign({}, state, {
          ...state,
          drawn: state.drawn.slice(0, state.drawn.indexOf(action.payload.cardId))
        });

      case 'ADD_TO_SUITS':
        if(state.drawn.indexOf(action.payload.cardId) !== -1) {
          return Object.assign({}, state, {
            ...state,
            drawn: state.drawn.slice(0, state.drawn.indexOf(action.payload.cardId))
          });
        } else {
          return state;
        }
    default:
      return state;
  }
}

export default deck;
