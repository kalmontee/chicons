import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

function MapContainer(props) {
   const mapStyles = {
      width: '60%',
      height: '100%',
   }

   return (
      <Map
         google={props.google}
         visible={props.visible}
         zoom={props.zoom}
         style={mapStyles}
         onClick={props.onMapClicked}
         center={{
            lat: props.lat,
            lng: props.lng
         }}>

         <Marker
            title={props.title}
            name={"West New York"}
            position={{ lat: props.lat, lng: props.lng }}
         />

         <InfoWindow onClose={props.onInfoWindowClose} >
            <div>
               <h1>{props.selectedPlace}</h1>
            </div>
         </InfoWindow>
      </Map>
   );
}

const LoadingContainer = (props) => (
   <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
   apiKey: 'AIzaSyDWUZn7KlbUcbraIe6njU0DFVz-YYN2D_w',
   LoadingContainer: LoadingContainer,
})(MapContainer);

