import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';

class Favorites extends Component {
   render() {
      return (
         <div>
            <NavBar />
            <h1 style={{textAlign: "center", marginTop: "20px"}}>Welcome to my favorites</h1>
         </div>
      )
   }
}

export default Favorites;
