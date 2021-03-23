import React, { Component } from 'react';

import Flat from '../components/flat.jsx';

class FlatList extends Component {
  // Temp code
  static defaultProps = {
    flats: [{
      "name": "Charm at the Steps of Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "EUR"
    }]
  }

  render() {
    return (
      <div className="flat-list col-sm-7" >
        {this.props.flats.map((flat) => {
          return <Flat key={flat.name} flat={flat} />;
        })}
      </div>
    );
  }
}



export default FlatList;
