const initialState = {
  1: [],
  2: [],
  3: [],
  4: [],
}
const suits = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_SUITS':
      const { suitsId, cardId } = action.payload;
      return Object.assign({}, state, {
        ...state,
        [suitsId]: state[suitsId].concat(cardId)
      });
    default:
      return state;
  }
}

export default suits;
