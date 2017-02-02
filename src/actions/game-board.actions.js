let timer = null;
const timerTick = () => {
  return {
    type: 'TIMER_TICK'
  }
}

export const startGame = (cards, dispatch) => {
  return (dispatch) => {
    //Get all cardIds in an array
    // eslint-disable-next-line
    let cardsIds = Object.keys(cards).map(card => parseInt(card));
    let b, c, d;

    //Scramble that array
    c = cardsIds.length;
    while(c) {
      b = Math.random() * (--c + 1) | 0;
      d = cardsIds[c];
      cardsIds[c] = cardsIds[b];
      cardsIds[b] = d;
    }
    //24 first cars to the deck
    let cardsInDeck = cardsIds.slice(0, 24);

    //remaining cards on the board
    let cardsOnBoard = cardsIds.slice(24);

    //first card in every pile on the board should be visible
    let cardsToTurn = cardsOnBoard.filter((card, i) => {
      // console.log(i === 0 || i === 2 || i === 5 || i === 9 || i ===  14 ||i === 20 || i === 27);
      return i === 0 || i === 2 || i === 5 || i === 9 || i ===  14 ||i === 20 || i === 27;
    })

    //Clear timer if started
    clearInterval(timer);

    // Start a new timer
    dispatch({
      type: 'TIMER_START',
    });
    timer = setInterval(() => dispatch(timerTick()), 1000)
    dispatch({
      type: 'START_GAME',
      payload: {
        cardsInDeck: cardsInDeck,
        cardsOnBoard: cardsOnBoard,
        cardsToTurn: cardsToTurn,
      }

    });

  }
}

export const stopTimer = () => {
  clearInterval(timer)
  return {
    type: 'TIMER_STOP'
  }
}


export const resetDeck = (deck) => {
  return {
    type: 'RESET_DECK',
    payload: {
      deck: deck
    }
  }
}

export const drawFromDeck = (card) => {
  return {
    type: 'DRAW_FROM_DECK',
    payload: {
      card: card
    }
  }
}

export const moveCard = (targetRow, currentPlace, cardId) => {
  return {
    type: 'MOVE_CARD',
    payload: {
      targetRow: targetRow,
      currentPlace: currentPlace,
      cardId: cardId,
    }
  }
}

export const turnCard = (id) => {
  return {
    type: 'TURN_CARD',
    payload: {
      id: id,
    }
  }
}

export const addToSuits = (suitsId, cardId) => {
  return {
    type: 'ADD_TO_SUITS',
    payload: {
      suitsId: suitsId,
      cardId: cardId,
    }
  }
}
