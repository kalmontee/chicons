import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar";
import { JumbotronHome } from '../components/Jumbotron/Jumbotron';
import MapContainer from '../components/GoogleMaps/Map';
import API from '../utils/API';

class Home extends Component {
   state = {
      search: '',
      apartments: []
   }

   // Making a request to Google Maps API (geocode)
   searchApartmentLocation = (query) => {
      API.searchApartments(query)
         .then(res => {
            console.log(res.data);

            let userLat = (res.results[0].geometry.location.lat);
            let userLng = (res.results[0].geometry.location.lng);

            let map, infoWindow, google;
            let pos = {
               lat: userLat,
               lng: userLng
            }

            infoWindow = new google.maps.InfoWindow;
            map = new google.maps.Map(document.getElementById('map'), {
               center: {
                  lat: userLat,
                  lng: userLng,
               },

               zoom: 15
            });

            console.log(map)

            infoWindow.setPosition(pos);
            infoWindow.setContent('You.');
            infoWindow.open(map);
            map.setCenter(pos);

            this.setState({
               apartments: res.results,
               search: this.state.search,
            });
         })
         .catch(err => console.log(err));
   }

   handleSearchInput = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   }

   handleFormSearchSubmit = () => {
      this.searchApartmentLocation(this.state.search);
   }

   render() {
      return (
         <div className="home-page">
            <NavBar />
            <JumbotronHome
               location={this.state.location}
               handleSearchInput={this.handleSearchInput}
               handleFormSearchSubmit={this.handleFormSearchSubmit} />

            <MapContainer />
         </div>
      )
   }
}

export default Home;
