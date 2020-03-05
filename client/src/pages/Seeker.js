import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { JumbotronApartments } from "../components/Jumbotron/Jumbotron";
import API from "../utils/API"
import { Col, Row, Container } from "../components/Grid/Grid";
import Image from "../components/SeekerImage/image";
import Footer from "../components/Footer/footer";
import '../index.css';

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
        this.setState({ apartments: res.data, address: "", bedroom: "", description: "", phonenumber: "" }))
      .catch(err => console.log(err));
  };

  handleSavedButton = id => {
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

              <Image />
            </Col>
            <Col size="md-6 sm-12">

              {this.state.apartments.length ? (
                <li className="saved-list list-group-item searchListItemApt">
                  <h3 className="headerSeekerTitle">Listed Apartments</h3>
                  {this.state.apartments.map(apartment => (
                    <Row key={apartment._id}>
                      <Col size="1" className="emptyCol" />
                      <Col size="9" className="aptInfo">
                        <Row>
                          <p>Address: <span className="DB_results">{apartment.address}</span></p>
                        </Row>

                        <Row>
                          <p>Bedrooms: <span className="DB_results">{apartment.bedroom}</span></p>
                        </Row>

                        <Row>
                          <p>Description: <span className="DB_results">{apartment.description}</span></p>
                        </Row>

                        <Row>
                          <p>Phone Number: <span className="DB_results">{apartment.phonenumber}</span></p>
                        </Row>

                        <Row className="buttonDiv " >
                          <button className="btn btn-primary" onClick={() => this.handleSavedButton(apartment._id)} >Add To Favs</button>
                        </Row>
                      </Col>

                    </Row>
                  ))}
                </li>
              ) : (
                  <h3></h3>
                )}
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    )
  }
}

export default Seeker;