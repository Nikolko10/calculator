import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import CalculateContainers from './containers/CalculateContainers.js';
import './App.css';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path='/'
            component={CalculateContainers}
          />
          <Route
            path='/home'
            component={CalculateContainers}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
