import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SuitsComponent } from '../../../components';
import {  } from './../../../actions/game-board.actions';

const mapStateToProps = (state) => {
  return {
    suits: state.undoableGame.present.suits,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    test: () => {
      console.log('test');
    }
  }
}

class SuitsFetcher extends Component {
  render() {
    return <SuitsComponent {...this.props}/>
  }
}

const SuitsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuitsFetcher);

export default SuitsContainer;
