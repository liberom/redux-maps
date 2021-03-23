import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from '../containers/flat.jsx';



class FlatList extends Component {
  // Temp code
  // static defaultProps = {
  //   flats: [{
  //     "name": "Charm at the Steps of Montmartre",
  //     "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //     "price": 164,
  //     "priceCurrency": "EUR"
  //   }]
  // }

  componentWillMount() {
    // Dispatch action to load: flats!
    this.props.setFlats();
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
