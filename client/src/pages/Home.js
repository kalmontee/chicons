import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar";
import { JumbotronHome } from '../components/Jumbotron/Jumbotron';
import MapContainer from '../components/GoogleMaps/Map';
import API from '../utils/API';

class Home extends Component {
   state = {
      search: '',
      apartments: [],
   }

   // Making a request to Google Maps API (geocode)
   searchApartmentLocation = (search) => {
      API.searchApartments(search)
         .then(res => {
            console.log(res.data.results[0]);
            // this.setState({
            //    apartments: res.query,
            //    search: this.state.search,
            // });
         })
         .catch(err => {
            console.log(err)
            // this.setState({
            //    apartments: []
            // });
         });
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


// Set the state for initialCenter when user searches for a location.
// Set the lat and lng