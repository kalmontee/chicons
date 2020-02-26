import React, { Component } from 'react'
import NavBar from '../components/NavBar/NavBar';
import { JumbotronApartments } from "../components/Jumbotron/Jumbotron";
import API from "../utils/API"
import { Col, Row, Container } from "../components/Grid/Grid"
import SaveBtn from "../components/SaveBtn/save"


class Seeker extends Component {

   state = {
      apartments: [],
      address: "",
      bedrooms: "",
      description: "",
      phonenumber: ""
   };

   componentDidMount() {
      this.loadApartments()
   }
   loadApartments = () => {
      API.getApartments()
         .then(res =>
            this.setState({ apartments: res.data, address: "", bedroom: "", description: "", phonenumber: "" })
         )
         .catch(err => console.log(err));
   };

   handleSavedButton = id => {
      // console.log(event)
      // event.preventDefault();
      console.log(id)
     
      console.log(this.state.apartments)
      // let savedApartments = this.state.apartments.filter(apartment => apartment._id === event.target._id)
      // savedApartments = savedApartments[0];
      API.setSavedApartments(id)
         // console.log(savedApartmentss)
         .then(this.setState({ message: alert("Your Apartment is saved") }))
         .catch(err => console.log(err))
   }



   render() {
      return (
         <div>
            <NavBar />
            <JumbotronApartments />
            <Container fluid>
               <Row>
                  <Col size="md-6">


                  </Col>
                  <Col size="md-6 sm-12">

                     {this.state.apartments.length ? (
                        

                        <li className="saved-list list-group-item">
                           <h3>Apartments in our database</h3>
                           {this.state.apartments.map(apartment => (
                              <Row key={apartment._id}>

                                 <Col size="1" className="emptyCol" />
                                 <Col size="9" className="aptInfo">
                                    
                                    <Row>
                                      
                                       {apartment.address}
                                       </Row>
                                       <Row>
                                          {apartment.bedroom}
                                       </Row>
                                       <Row>
                                       {apartment.description}
                                       </Row>
                                       <Row>
                                          {apartment.phonenumber}
                                       </Row>
                                       
                                       <Row className="buttonDiv ">
                               <button className="btn btn-primary" onClick={() => this.handleSavedButton(apartment._id)} >Add To Favs</button>

                                 </Row>
                                 </Col>
                                 
                              </Row>
                           ))}
                        </li>
                     ) : (
                           <h3>No Results to Display</h3>
                        )}
                  </Col>
               </Row>
            </Container>
         </div>
      )
   }
}

export default Seeker;
