import { combineReducers } from 'redux';

import timer from './game/timer/timer.reducer';
import undoableGame from './game/game.reducer';

const reducers = combineReducers({
  undoableGame,
  timer,
});

export default reducers;
