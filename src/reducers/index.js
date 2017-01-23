import { combineReducers } from 'redux';

import undoableGame from './game/game.reducer';
const reducers = combineReducers({
  undoableGame,
});

export default reducers;
