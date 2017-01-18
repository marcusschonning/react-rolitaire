import { combineReducers } from 'redux';

import game from './game/game.reducer';
const reducers = combineReducers({
  game,
});

export default reducers;
