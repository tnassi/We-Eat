import React from "react";
import "./Map.css";
import { Image } from "semantic-ui-react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleMap;
