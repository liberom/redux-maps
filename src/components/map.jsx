import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import Marker from '../components/marker.jsx';



class SimpleMap extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.85, lng: 2.35 }
    return (
      // Important! Always set the container height explicitly
      <div className="col-sm-5" style={{ height: '100vh', width: '100%' }}>



        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={center}
          defaultZoom={t15}
        >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
