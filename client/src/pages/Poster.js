import React, { Component } from 'react';
import API from "../utils/API";
import Postform from "../components/Postform/form";
import { JumbotronApartments } from "../components/Jumbotron/Jumbotron";
import NavBar from "../components/NavBar/NavBar";
import { Col, Row } from "../components/Grid/Grid"
import Modal from "../components/Modal/modal"


class Poster extends Component {

  state = {
    apartments: [],
    username: "",
    address: "",
    bedrooms: "",
    description: "",
    phonenumber: ""
  };

  componentDidMount() {
    this.loadApartments()
  }

  loadApartments = () => {
    API.getApartments().then(res => console.log(res))
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });


  };

  handleFormSubmit = event => {
    event.preventDefault();
    // alert("it works")
    if (this.state.address && this.state.bedroom && this.state.description && this.state.phonenumber) {

      API.saveApartment({
        username: this.state.username,
        address: this.state.address,
        bedroom: this.state.bedroom,
        description: this.state.description,
        phonenumber: this.state.phonenumber
      })
        .then(res => this.loadApartments())
        .catch(err => console.log(err));

      this.setState({
        username: "",
        address: "",
        bedroom: "",
        description: "",
        phonenumber: ""
      })
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <JumbotronApartments />
        <Row>
          <Postform
            user={this.state.user}
            address={this.state.address}
            bedroom={this.state.bedroom}
            description={this.state.description}
            phonenumber={this.state.phonenumber}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Col size="1" className="emptyCol" />

        </Row>
      </div>
    )
  }
}

export default Poster

