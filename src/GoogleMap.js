import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const handleApiLoaded = (map, maps) => {
  console.log(map);
  console.log(maps);
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.3,
      lng: 236.85,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "75vh",
          width: "100%",
          borderRadius: "50px",
          overflow: "hidden",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC_-dICZqWecrafgAWkKMlc0OpfapUkLWQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent lat={49.3} lng={236.85} text="Vancouber, BC" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
