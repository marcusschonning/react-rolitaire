import { combineReducers } from 'redux';

import deck from './deck/deck.reducer';
import board from './board/board.reducer';
import suits from './suits/suits.reducer';
import cardsById from './cardsById/cardsById.reducer';

const game = combineReducers({
  deck,
  board,
  suits,
  cardsById
})

export default game;
