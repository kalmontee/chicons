import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
   render() {
      const mapStyles = {
         width: '80%',
         height: '50%',
         margin: "0 auto",
      };
      
      return (
         <div>
            <Map
               google={this.props.google}
               zoom={8}
               style={mapStyles}
               initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
         </div>
      )
   }
}

export default GoogleApiWrapper({
   apiKey: ''
})(MapContainer);

