const initialState = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
};

const board = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      // add each card on board to the state with a "triangular sequence",
      // length of cardsOnBoard should be equal to 27
      return Object.keys(initialState)
        .map(key => parseInt(key, 10))
        .reduce((state, key, index,) => {
          state[key] = action.payload.cardsOnBoard.slice(index*(index+1)/2, (index*(index+1)/2) + key);
          return state;
        }, {});

    case 'MOVE_CARD':
      const { cardId, targetRow, currentPlace } = action.payload;

      if(currentPlace === 'BOARD') {
        let removeKey;
        for(let key in state) {
          if(state[key].indexOf(cardId) !== -1) {
            removeKey = key;
            break;
          }
        }
        return {
          ...state,
          [removeKey]: state[removeKey].slice(0, state[removeKey].indexOf(cardId)),
          [targetRow]: state[targetRow].concat(
            state[removeKey].slice(state[removeKey].indexOf(cardId))
          )

        }
      }
      return {
        ...state,
        [targetRow]: state[targetRow].concat(cardId)
      }

    case 'ADD_TO_SUITS':
      const removeCardId = action.payload.cardId;
      let removeFromStateKey,
          movedToSuitsArr = [];
      for (let key in state) {
        if(state[key].indexOf(removeCardId) !== -1) {
          removeFromStateKey = key;
          movedToSuitsArr = state[key].slice(0, state[key].indexOf(removeCardId)).concat(
            state[key].slice(state[key].indexOf(removeCardId) + 1)
          )
          break;
        }
      }
      if(removeFromStateKey) {
        return {
          ...state,
          [removeFromStateKey]: movedToSuitsArr
        }
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default board;
