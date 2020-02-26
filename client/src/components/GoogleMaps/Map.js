import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapContainer(props) {

   const mapStyles = {
      width: '80%',
      height: '50%',
      margin: "0 auto",
   }

   return (
      <div id="map">
         <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 38.7555258, lng: -80.04494120000001 }}
         />
      </div>
   )
}

export default GoogleApiWrapper({
   apiKey: ''
})(MapContainer);

