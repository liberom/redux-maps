import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer';

import App from './components/app.jsx'

const reducers = combineReducers({
  flats: flatsReducer
});


ReactDOM.render(
  <Provider store={createStore(reducers)} >
    <App />
  </Provider>,
  document.getElementById('root'));

