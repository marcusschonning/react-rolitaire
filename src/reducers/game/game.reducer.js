import undoable, { distinctState } from 'redux-undo';
import { combineReducers } from 'redux';

import deck from './deck/deck.reducer';
import board from './board/board.reducer';
import suits from './suits/suits.reducer';
import cardsById from './cardsById/cardsById.reducer';

const game = combineReducers({
  deck,
  board,
  suits,
  cardsById,
})

const undoableGame = undoable(game, {
  filter: distinctState()
});

export default undoableGame;
