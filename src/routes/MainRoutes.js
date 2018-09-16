import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CalculateContainers from '../containers/CalculateContainers.js';
import ResultsContainer from '../containers/ResultsContainer.js';
import currentСurrency from '../hoc/currentСurrency';
import SwitchCurrency from '../components/blocks/SwitchCurrency/SwitchCurrency';

const MainRoutes = () => {
    return (
      <Switch>
        <Route
          exact
          path='/'
          component={currentСurrency(CalculateContainers, SwitchCurrency)}
        />
        <Route
          path='/home'
          component={currentСurrency(CalculateContainers, SwitchCurrency)}
        />
        <Route
          path='/results'
          component={ResultsContainer}
        />
      </Switch>
    );
};

export default MainRoutes;