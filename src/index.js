import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const config = configureStore();

ReactDOM.render(
  <Provider store={config}>
    <App />
  </Provider>, 
	document.getElementById('root'),
);

registerServiceWorker();
