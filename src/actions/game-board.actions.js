export const startGame = (cards) => {
  // eslint-disable-next-line
  let cardsIds = Object.keys(cards).map(card => parseInt(card));
  let b, c, d;

  c = cardsIds.length;

  while(c) {
    b = Math.random() * (--c + 1) | 0;
    d = cardsIds[c];
    cardsIds[c] = cardsIds[b];
    cardsIds[b] = d;
  }
  let cardsInDeck = cardsIds.slice(0, 24);
  let cardsOnBoard = cardsIds.slice(24);
  let cardsToTurn = cardsOnBoard.filter((card, i) => {
    // console.log(i === 0 || i === 2 || i === 5 || i === 9 || i ===  14 ||i === 20 || i === 27);
    return i === 0 || i === 2 || i === 5 || i === 9 || i ===  14 ||i === 20 || i === 27;
  })

  return {
    type: 'START_GAME',
    payload: {
      cardsInDeck: cardsInDeck,
      cardsOnBoard: cardsOnBoard,
      cardsToTurn: cardsToTurn,
    }
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
