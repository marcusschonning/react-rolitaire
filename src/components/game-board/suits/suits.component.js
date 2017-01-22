import React, { Component } from 'react';

import SuitContainer from './../../../containers/game-board/suits/suit.container';
import './suits.component.css';

class SuitsComponent extends Component {
  render() {
    const { suits } = this.props;
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
}

export default SuitsComponent;
