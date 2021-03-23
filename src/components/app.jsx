import React, { Component } from 'react';
import FlatList from '../containers/flat_list.jsx';
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

