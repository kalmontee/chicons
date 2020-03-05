import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar";
import { JumbotronHome } from '../components/Jumbotron/Jumbotron';
import { List, ListItem } from "../components/List/list";
import { Container, Row } from "../components/Grid/Grid";
import MapContainer from '../components/GoogleMaps/Map';
import API from '../utils/API';
import './home.css'

class Home extends Component {
   state = {
      search: '', // Search Input
      name: '', // Naming the Marker
      title: '', // Naming the Marker
      apartments: [], // Displaying all apartments from the second API
      visible: false, // Making google maps visable
      selectedMarker: false,
      lat: 40.7878788,
      lng: -74.0143064,
      zoom: 15,
   }

   handleFormSearchSubmit = () => this.searchApartmentLocation(this.state.search);

   // Making a request to Google Maps API (geocode) along with the second API
   searchApartmentLocation = (search) => {

      // Google Maps Search
      API.googleMaps(search)
         .then(res => {
            // Data is the results of Google Maps input search. 
            let data = res.data.results[0];

            console.log("This is Google Maps data ", data);
            this.setState({
               zoom: 15,
               visible: true,
               lat: data.geometry.location.lat,
               lng: data.geometry.location.lng
            });

            // Second API functioning with google maps.
            // Here we're passing Google Maps geocode latitude and longitude from the user's input search and feeding it to the second API to get results back from that exact location.
            API.searchApartments(data.geometry.location.lat, data.geometry.location.lng)
               .then(results => {
                  console.log("This is the second API data ", results.data)

                  this.setState({
                     apartments: results.data.listings,
                     title: results.data.listings,
                     name: results.data.listings
                  });
               })
               .catch(err => alert(err));
         })
         .catch(err => alert(err));
   }

   handleClickMarker = (marker) => {
      console.log({ marker })
      this.setState({ selectedMarker: marker })
   }

   handleSearchInput = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   }

   render() {
      return (
         <div className="home-page">
            <NavBar />
            <JumbotronHome
               handleSearchInput={this.handleSearchInput}
               handleFormSearchSubmit={this.handleFormSearchSubmit} />

            <MapContainer
               google={this.state.google}
               visible={this.state.visible}
               lat={this.state.lat}
               lng={this.state.lng}
               onClick={this.handleClickMarker}
               zoom={this.state.zoom}
               markers={this.state.apartments}
               name={this.state.apartments}
               title={this.state.apartments} />

            <Container fluid>
               <div className="inner-container">
                  <List>
                     {this.state.apartments.map(result => (
                        <ListItem key={result.id}>
                           <strong>
                              <ul>
                                 <Row>
                                    <p className="results_title" >Address: <span className="results_apartments">{result.formattedAddress}</span></p>
                                 </Row>
                                 <Row>
                                    <p className="results_title">Rental Price: <span className="results_apartments">{result.price}</span></p>
                                 </Row>
                                 <Row>
                                    <p className="results_title">Bedrooms: <span className="results_apartments">{result.bedrooms}</span></p>
                                 </Row>
                                 <Row>
                                    <p className="results_title">Bathrooms: <span className="results_apartments">{result.bathrooms}</span></p>
                                 </Row>
                                 <Row>
                                    <p className="results_title">Property Type: <span className="results_apartments">{result.propertyType}</span></p>
                                 </Row>
                              </ul>
                           </strong>
                        </ListItem>
                     ))}
                  </List>
               </div>
            </Container>
         </div>
      )
   }
}

export default Home;