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
      let newBoardState = Object.assign({}, state)
      let count = 0;
      for(let i = 0; i < 7; i++) {
        for(let j = 0; j <= i; j++) {
          newBoardState[i+1] = newBoardState[i+1].concat(action.payload.cardsOnBoard[count]);
          count++;
        }
      }
      return newBoardState;

    case 'MOVE_CARD':
      const { dropId, targetId } = action.payload;
      let addKey;
      let removeKey;
      for(let key in state) {
        if(state[key].indexOf(dropId) !== -1) {
          removeKey = key;

        }
        if(state[key].indexOf(targetId) !== -1) {
          addKey = key;
        }
      }
      let removeFromArray = removeKey ? state[removeKey].slice(0, state[removeKey].indexOf(dropId)) : null;
      let addToArray = state[addKey].concat(removeKey ?
        state[removeKey].slice(state[removeKey].indexOf(dropId)) :
        dropId
      );
      let newMovedState = removeFromArray ?
        {
          ...state,
          [removeKey]: removeFromArray,
          [addKey]: addToArray
        } :
        {
          ...state,
          [addKey]: addToArray
        };
      return Object.assign({}, state, newMovedState);

      case 'MOVE_KING':
        let { targetRow, currentPlace, cardId } = action.payload;
        if(currentPlace === 'DECK') {
          return Object.assign({}, state, {
            ...state,
            [targetRow]: state[targetRow].concat(cardId)
          })
        }
        let removeKingKey;
        for(let key in state) {
          if(state[key].indexOf(cardId) !== -1) {
            removeKingKey = key;
          }
        }
        let movedCards = state[removeKingKey].slice(state[removeKingKey].indexOf(cardId));

        return Object.assign({}, state, {
          ...state,
          [removeKingKey]: state[removeKingKey].slice(0, state[removeKingKey].indexOf(cardId)),
          [targetRow]: state[targetRow].concat(movedCards),

        });
    default:
      return state;
  }
}

export default board;
