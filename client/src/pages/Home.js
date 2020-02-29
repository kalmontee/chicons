import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar";
import { JumbotronHome } from '../components/Jumbotron/Jumbotron';
import MapContainer from '../components/GoogleMaps/Map';
import API from '../utils/API';

class Home extends Component {
   state = {
      search: '',
      apartments: [],
      google: '',
      visible: false,
      lat: 42.02,
      lng: -77.01,
      zoom: 15,
      address: "",
      title: ''
   }

   // Making a request to Google Maps API (geocode)
   searchApartmentLocation = (search) => {
      API.searchApartments(search)
         .then(res => {
            console.log(res.data.results[0]);

            this.setState({
               lat: res.data.results[0].geometry.location.lat,
               lng: res.data.results[0].geometry.location.lng,
               zoom: 15,
               visible: true,
               title: res.data.results[0].formatted_address
            });
         })
         .catch(err => alert(err));
   }

   handleSearchInput = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   }

   handleFormSearchSubmit = () => this.searchApartmentLocation(this.state.search);

   render() {
      return (
         <div className="home-page">
            <NavBar />
            <JumbotronHome
               location={this.state.location}
               handleSearchInput={this.handleSearchInput}
               handleFormSearchSubmit={this.handleFormSearchSubmit} />

            <MapContainer
               google={this.state.google}
               visible={this.state.visible}
               lat={this.state.lat}
               lng={this.state.lng}
               zoom={this.state.zoom}
               address={this.state.address}
               title={this.state.title} />
         </div>
      )
   }
}

export default Home;