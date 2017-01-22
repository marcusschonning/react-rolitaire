const initialState = {
  1: [],
  2: [],
  3: [],
  4: [],
}
const suits = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      return initialState;

    case 'ADD_TO_SUITS':
      const { suitsId, cardId } = action.payload;
      let keyInArrayWithAce;
      for(let key in state) {
        if(state[key].indexOf(cardId) !== -1) {
          keyInArrayWithAce = key;
          break;
        }
      }
      return keyInArrayWithAce ? Object.assign({}, state, {
        ...state,
        [suitsId]: state[suitsId].concat(cardId),
        [keyInArrayWithAce]: state[keyInArrayWithAce].filter(ace => ace !== cardId)
      }) : Object.assign({}, state, {
        ...state,
        [suitsId]: state[suitsId].concat(cardId)
      });

    case 'MOVE_CARD':
      let keyInArrayToFilter;
      for(let key in state) {
        if(state[key].indexOf(action.payload.dropId) !== -1) {
          keyInArrayToFilter = key;
          break;
        }
      }
      return !keyInArrayToFilter ? state : Object.assign({}, state, {
        ...state,
        [keyInArrayToFilter]: state[keyInArrayToFilter].filter(card => card !== action.payload.dropId)
      });

    default:
      return state;
  }
}

export default suits;
