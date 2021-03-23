import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';


class SimpleMap extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.85, lng: 2.35 }

    if (this.props.selectedFlat) {
      marker = <div style={{width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%' }}
      lat={this.props.selectedFlat.lat}
      lng={this.props.selectedFlat.lng} />;

      center = {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      };
    }

    return (
      // Important! Always set the container height explicitly
      <div className="col-sm-5" style={{ height: '100vh', width: '100%' }}>



        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={center}
          defaultZoom={15}
        >
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
