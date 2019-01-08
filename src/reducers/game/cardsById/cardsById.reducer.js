
let _suitVal = 0;
const cards = [...Array(52)]
  .map((_, i) => {
    if(i % 13 === 0) _suitVal++
    const _suit = _suitVal === 1 ? 'hearts' : _suitVal === 2 ? 'diamonds' : _suitVal === 3 ? 'clubs' : 'spades';
    const _suitColor = _suitVal > 2 ? 'black' : 'red';
    return {
      id: i + 1,
      value: (i % 13) + 1,
      suit: _suit,
      suitColor: _suitColor,
      suitValue: _suitVal,
      show: false,
    };
  })
  .reduce((acc, card) => {
    return {
      ...acc,
      [card.id]: card
    }
  }, {});

const initialState = cards;

const cardsById = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      const cardsToTurn = { ...initialState };
      for(let i = 0; i < action.payload.cardsToTurn.length; i++) {
        const cardToTurn = action.payload.cardsToTurn[i];
        cardsToTurn[cardToTurn] = {
          ...state[cardToTurn],
          show: true
        }
      }
      return {...state, ...cardsToTurn};
    case 'DRAW_FROM_DECK':
      const { card } = action.payload;
      const { id } = card;
      return {
        ...state,
        [id]: {
          ...state[id],
          show: true,
        }
      };

    case 'TURN_CARD':
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          show: true
        }
      }

    case 'RESET_DECK':
      let resetCardsInDeck = {};
      let keys = action.payload.deck.drawn;
      for(let i = 0; i < keys.length; i++) {
        resetCardsInDeck[keys[i]] = {
          ...state[keys[i]],
          show: false,
        }
      }
      return {...state, ...resetCardsInDeck};

    default:
      return state;
  }
}

export default cardsById;
