import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// import flats from '../data/flats.js';
import FlatList from '../containers/flat_list.jsx';

// import Marker from './marker.jsx';
import SimpleMap from '../containers/map.jsx';


const App = () => {
  return (
    <div className="row" >
      <FlatList />
      <SimpleMap />
    </div>
  );
}

export default App;

