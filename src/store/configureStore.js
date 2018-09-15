import { applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(initialState) {
  const middlewares = [
    reduxThunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );

  return store;
}
