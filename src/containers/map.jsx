import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import Marker from '../components/marker';


class SimpleMap extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.85, lng: 2.35 }

    if (this.props.selectedFlat) {
      marker =  <Marker className="marker"
                  lat={this.props.selectedFlat.lat}
                  lng={this.props.selectedFlat.lng} />;


      center = {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      };
    }

    return (
      // Important! Always set the container height explicitly
      <div className="col-sm-5" style={{ height: '100vh' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={center}
          defaultZoom={12} >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}

export default connect(mapStateToProps)(SimpleMap);
