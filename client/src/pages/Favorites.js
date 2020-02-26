import React, { Component } from 'react';
import API from "../utils/API";
import NavBar from '../components/NavBar/NavBar';
import { Container } from "../components/Grid/Grid"
import SavedApt from "../components/SavedApt/savedApt";


class Favorites extends Component {
   state = {
      favedApartments: []
   };
   componentDidMount() {
      API.favedApartments()
         .then(res => {
            this.setState({ favedApartments: res.data })
         })
         .catch(err => console.log(err))

   }
   handleDeleteButton = (id) => {
      console.log(id)
      API.deleteApartment(id)
         .then(res => this.componentDidMount())
         .catch(err => console.log(err))
   }

   render() {
      return (
         <div>
            <NavBar />
            <Container>
               <SavedApt favedApartments={this.state.favedApartments} handleDeleteButton={this.handleDeleteButton} />

            </Container>
         </div>
      )
   }
}

export default Favorites;
