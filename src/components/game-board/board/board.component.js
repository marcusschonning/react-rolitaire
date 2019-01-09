import React from 'react';
import PropTypes from 'prop-types';

import { BoardRowContainer } from './../../../containers';
import './board.component.css';

BoardComponent.propTypes = {
  board: PropTypes.object.isRequired,
  cardsShowing: PropTypes.object.isRequired,
}
function BoardComponent ({board, cardsShowing}) {
  return (
    <div className="board">
      <div className="board-rows">
        {
          Object.keys(board).map(row => {
            return (
              <BoardRowContainer key={row} id={row} boardRow={board[row]} cardsShowing={cardsShowing[row]} />
            )
          })
        }
      </div>
    </div>
  );
}

export default BoardComponent;
