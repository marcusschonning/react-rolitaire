import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer } from './../../../containers';

SuitComponent.propTypes = {
  suits: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
}
function SuitComponent ({suits, id}) {
  const cards = suits[id];
  return (
    <div className="suitRow">
      <div className="card"></div>
      {
        cards.map(card => {
          return(
            <CardContainer key={card} cardId={card} />
          )
        })
      }
    </div>
  )
}

export default SuitComponent;
