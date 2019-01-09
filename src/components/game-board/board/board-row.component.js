import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer } from './../../../containers';
import './board.component.css';

BoardRowComponent.propTypes = {
  boardRow: PropTypes.array.isRequired,
  cardsShowing: PropTypes.array.isRequired,
}
function BoardRowComponent({boardRow, cardsShowing}) {
  return (
    <div className="board-row">
      <div className="card"></div>
      {
        boardRow.map((card, i) => {
          return(
            <div key={card}>
              <CardContainer cardsShowing={cardsShowing} orderFromLast={i} cardId={card} />
            </div>
          )
        })
      }
    </div>
  );
}

export default BoardRowComponent;
