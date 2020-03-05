import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

function MapContainer(props) {
   const mapStyles = {
      width: '56%',
      height: '95%',
      zIndex: '10',
      position: "fixed"
   }

   return (
      <Map
         google={props.google}
         visible={props.visible}
         zoom={props.zoom}
         style={mapStyles}
         onClick={props.onMapClicked}
         center={{ lat: props.lat, lng: props.lng }}>

         {props.markers.map(marker => {
            const onClick = props.onClick.bind(this, marker)
            return (
               < Marker
                  key={marker.id}
                  title={marker.address}
                  onClick={onClick}
                  name={marker.address}
                  position={{ lat: marker.latitude, lng: marker.longitude }}
               />
            )
         })}

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

