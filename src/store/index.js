import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import initialState from './initial-state';

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  initialState, 
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

export default store;