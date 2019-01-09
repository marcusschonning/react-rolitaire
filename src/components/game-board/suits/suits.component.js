import React from 'react';
import PropTypes from 'prop-types';

import { SuitContainer } from './../../../containers';
import './suits.component.css';

SuitsComponent.propTypes = {
  suits: PropTypes.object.isRequired,
}

function SuitsComponent({suits}) {
  return(
    <div className="suits">
      {
        Object.keys(suits).map(suit => {
          return (
            <SuitContainer id={suit} key={suit} />
          )
        })
      }
    </div>
  )
}

export default SuitsComponent;
