export const setDeck = (cards) => {
  return {
    type: 'SET_DECK',
    payload: {
      cards: cards
    }
  }
}
