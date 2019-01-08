import React, { Component } from 'react';

import { SuitContainer } from './../../../containers';
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
