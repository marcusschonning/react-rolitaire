export const drawFromDeck = (card) => {
  return {
    type: 'DRAW_FROM_DECK',
    payload: {
      card: card
    }
  }
}
