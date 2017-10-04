import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppComponent from './components/app/app.component';
import StartScreenComponent from './components/start-screen/start-screen.component';
import GameBoardContainer from './containers/game-board/game-board.container';

const Routes = () =>(
  <Router history={browserHistory}>
    <Route component={AppComponent}>
      <Route path="/" component={StartScreenComponent} />
      <Route path="/game" component={GameBoardContainer} />
    </Route>
  </Router>
)

export default Routes;
