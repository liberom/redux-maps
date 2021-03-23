// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// Import CSS
import '../assets/stylesheets/application.scss';

// Import Reducers
import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

// Import App
import App from './components/app.jsx'

// List reducers
const reducers = combineReducers({
  flats: flatsReducer
  selectedFlat: selectedFlatReducer
});

// Render React DOM
ReactDOM.render(
  <Provider store={createStore(reducers)} >
    <App />
  </Provider>,
  document.getElementById('root'));

