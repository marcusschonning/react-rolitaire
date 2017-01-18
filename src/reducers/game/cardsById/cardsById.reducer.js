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
    cards = cards.concat({
      value: value,
      suit: suit,
      suitValue: suitValue,
      show: false,
      placement: 'DECK_NOT_DRAWN',
      id: cardId
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
    case 'DRAW_FROM_DECK':
      let { card } = action.payload;

      let { id } = card;
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          placement: 'DECK_DRAWN',
          show: true,
        }
      });
    default:
      return state;
  }
}

export default cardsById;
