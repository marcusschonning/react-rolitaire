let cards = [];

let value = 0;
let suitValue = 0;
let suit = '';

let cardId = 0;
for(let i = 0; i < 4; i++) {
  suitValue++;
  for(let j = 0; j < 13; j++) {
    cardId++;
    value++
    switch(suitValue) {
      case 1:
        suit = 'hearts';
        break;
      case 2:
        suit = 'diamonds';
        break;
      case 3:
        suit = 'clubs';
        break;
      case 4:
        suit = 'spades';
        break;
      default:
        break;
    }
    let suitColor = suitValue > 2 ? 'black' : 'red';
    cards = cards.concat({
      id: cardId,
      value: value,
      suit: suit,
      suitColor: suitColor,
      suitValue: suitValue,
      show: false,
    })
  }
  value = 0;
}

let temp = {};
for (var i = 0; i < cards.length; i++) {
  temp[cards[i].id] = cards[i];
}
const initialState = temp;

const cardsById = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      let cardsToTurn = Object.assign({}, initialState);
      for(let i = 0; i < action.payload.cardsToTurn.length; i++) {
        let cardToTurn = action.payload.cardsToTurn[i];
        cardsToTurn[cardToTurn] = Object.assign({}, state[cardToTurn], {
          ...state[cardToTurn],
          show: true
        })
      }
      return Object.assign({}, state, cardsToTurn);
    case 'DRAW_FROM_DECK':
      let { card } = action.payload;

      let { id } = card;
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          show: true,
        }
      });

    case 'TURN_CARD':
      return Object.assign({}, state, {
        [action.payload.id]: {
          ...state[action.payload.id],
          show: true
        }
      })

    case 'RESET_DECK':
      let resetCardsInDeck = {};
      let keys = action.payload.deck.drawn;
      for(let i = 0; i < keys.length; i++) {
        resetCardsInDeck[keys[i]] = Object.assign({}, state[keys[i]], {
          ...state[keys[i]],
          show: false,
        })
      }
      return Object.assign({}, state, resetCardsInDeck);

    default:
      return state;
  }
}

export default cardsById;
