import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';
import { Router, HashRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import './static/css/main.css';
import './static/css/button.css';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <MainRoutes />
      </Router>
    );
  }
}

export default App;
