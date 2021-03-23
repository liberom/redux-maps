// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux and Middlewares
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// Import CSS
import '../assets/stylesheets/application.scss';

// Import Reducers
import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

// Import App
import App from './components/app.jsx'

// List reducers
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

// List middlewares
const middlewares = applyMiddleware(logger);

// Render React DOM, creating store and calling middlewares
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)} >
    <App />
  </Provider>,
  document.getElementById('root'));

