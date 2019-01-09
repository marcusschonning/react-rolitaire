import React from 'react';
import PropTypes from 'prop-types';

import { DeckContainer, BoardContainer, SuitsContainer } from './../../containers';

import './game-board.component.css';

GameBoardComponent.propTypes = {
  startGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
  timer: PropTypes.object.isRequired,
  finnished: PropTypes.bool.isRequired,
}

function GameBoardComponent({startGame, game, canUndo, canRedo, undo, redo, timer, finnished}) {
  return(
    <div className={'game-board'}>
      <div>
        <button onClick={() => startGame(game.cardsById)}>Restart</button>
        <button disabled={!canUndo} onClick={undo}>Undo</button>
        <button disabled={!canRedo} onClick={redo}>Redo</button>
        <p>{timer.timeStr}</p>
      </div>
      {finnished ?
        //
        <div>
          <h1>Grattis!</h1>
          <p>Du klarade speled på&nbsp;
            <strong>{timer.hrs ? timer.hrs + ' hrs ' : null}</strong>
            <strong>{timer.min ? timer.min + ' min ' : null}</strong>
            <strong>{timer.sec ? timer.sec + ' sec' : null}</strong>
          </p>
        </div> :
        //
        <div>
          <DeckContainer />
          <SuitsContainer />
          <BoardContainer />
        </div>
      }
    </div>
  )
}

export default GameBoardComponent;
