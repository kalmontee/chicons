import React, { Component } from 'react'
import NavBar from '../components/NavBar/NavBar';
import { JumbotronApartments } from "../components/Jumbotron/Jumbotron";

class Seeker extends Component {

   render() {
      return (
         <div>
            <NavBar />
            <JumbotronApartments />
         </div>
      )
   }
}

export default Seeker;
