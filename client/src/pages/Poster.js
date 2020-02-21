import React, { Component } from 'react';
import API from "../utils/API"
import Postform from "../components/Postform/form"
import Jumbotron from "../components/Jumbotron/Jumbotron"

class Poster extends Component {

  state = {
    address: "",
    bedrooms: "",
    description: "",
    phonenumber: "",

};

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
    // alert("it works")
    if(this.state.address && this.state.bedrooms && this.state.description && this.state.phonenumber) {
    console.log(this.props)
      API.saveApartment({
        address: this.state.address,
        bedrooms: this.state.bedrooms,
        description: this.state.description,
        phonenumber: this.state.phonenumber
      })
    
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
      }
  };

    render() {
        return (
            <div>
              <Jumbotron/>
                <Postform address={this.state.address}
                bedrooms={this.state.bedrooms}
                description={this.state.description}
                phonenumber= {this.state.phonenumber}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
             
            </div>
        )
    }
}

export default Poster

