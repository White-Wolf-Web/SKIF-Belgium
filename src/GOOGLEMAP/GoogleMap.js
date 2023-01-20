import React from 'react'
import GoogleMapReact from 'google-map-react'
//import './map.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

export default function GoogleMap(props){
  const defaultProps = {
    center: {
      lat: 51.1757835,
      lng: 4.456297
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ maxHeight: '200px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

