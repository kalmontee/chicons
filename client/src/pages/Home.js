import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar";
import { JumbotronHome } from '../components/Jumbotron/Jumbotron';
import { List, ListItem } from "../components/List/list";
import { Container, Row, Col } from "../components/Grid/Grid";
import MapContainer from '../components/GoogleMaps/Map';
import API from '../utils/API';
import './home.css'

class Home extends Component {
   state = {
      search: '',
      apartments: [],
      visible: false,
      selectedMarker: false,
      name: '',
      title: '',
      lat: null,
      lng: null,
      zoom: 15,
   }

   handleFormSearchSubmit = () => this.searchApartmentLocation(this.state.search);

   // Making a request to Google Maps API (geocode)
   searchApartmentLocation = (search) => {
      // Second API listing all the apartments
      API.searchApartments(search)
         .then(res => {
            console.log(res.data.listings)

            this.setState({
               // google: res.data.listings.formattedAddress,
               apartments: res.data.listings,
               lat: res.data.listings[0].latitude,
               lng: res.data.listings[0].longitude,
               title: res.data.listings,
               name: res.data.listings
            });
         })
         .catch(err => console.log(err));

      // Google Maps Search
      API.googleMaps(search)
         .then(res => {
            console.log(res.data.results[0]);
            this.setState({ zoom: 15, visible: true, });
         })
         .catch(err => alert(err));
   }

   handleClickMarker = (marker, event) => {
      console.log({ marker })
      this.setState({ selectedMarker: marker })
   }

   handleSavedButton = id => {
      console.log(id)
      console.log(this.state.apartments)

      API.setSavedApartments(id)
         .then(this.setState({ message: alert("Your Apartment is saved") }))
         .catch(err => console.log(err))
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
               location={this.state.location}
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
                                    <p>Address: </p>
                                    {result.formattedAddress}
                                 </Row>
                                 <Row>
                                    <p>Rental Price:</p>
                                    {result.price}
                                 </Row>
                                 <Row>
                                    <p>Bedrooms:</p>
                                    {result.bedrooms}
                                 </Row>
                                 <Row>
                                    <p>Bathrooms:</p>
                                    {result.bathrooms}
                                 </Row>
                              </ul>
                           </strong>
                           <a href="https://www.google.com/maps/place/205+Palisade+Ave,+Jersey+City,+NJ+07306/@40.736091,-74.0519487,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25746381375a7:0xa183ae5eefb12dfc!8m2!3d40.736087!4d-74.04976" target="_blank">
                              <button className="viewApartment btn btn-success">
                                 View Apt
                              </button>
                           </a>
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