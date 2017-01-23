const initialState = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
}

const board = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      let newBoardState = Object.assign({}, initialState);
      let count = 0;
      for(let i = 0; i < 7; i++) {
        for(let j = 0; j <= i; j++) {
          newBoardState[i+1] = newBoardState[i+1].concat(action.payload.cardsOnBoard[count]);
          count++;
        }
      }
      return newBoardState;

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
        return Object.assign({}, state, {
          ...state,
          [removeKey]: state[removeKey].slice(0, state[removeKey].indexOf(cardId)),
          [targetRow]: state[targetRow].concat(
            state[removeKey].slice(state[removeKey].indexOf(cardId))
          )

        })
      }
      return Object.assign({}, state, {
        ...state,
        [targetRow]: state[targetRow].concat(cardId)
      })

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
        return Object.assign({}, state, {
          ...state,
          [removeFromStateKey]: movedToSuitsArr
        })
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default board;
