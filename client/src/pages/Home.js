import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar";
import Header from '../components/Jumbotron/Jumbotron';
import MapContainer from '../components/GoogleMaps/Map';

class Home extends Component {
   render() {
      return (
         <div className="home-page">
            <NavBar />
            <Header />
            <MapContainer />
         </div>
      )
   }
}

export default Home;
