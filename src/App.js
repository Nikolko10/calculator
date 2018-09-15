import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import CalculateContainers from './containers/CalculateContainers.js';
import currentСurrency from './hoc/currentСurrency';
import SwitchCurrency from './components/blocks/SwitchCurrency/SwitchCurrency';
import './static/css/main.css';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path='/'
            component={currentСurrency(CalculateContainers, SwitchCurrency)}
          />
          <Route 
            path='/home'
            component={currentСurrency(CalculateContainers, SwitchCurrency)}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
