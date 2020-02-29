import React, { Component } from 'react'
import NavBar from "../components/NavBar/NavBar";
import ApiForm from "../components/ApiForm/apiForm"
import API from '../utils/API';
import {List, ListItem } from "../components/List/list"
import {Row} from "../components/Grid/Grid"
import {JumbotronSecond} from "../components/Jumbotron/Jumbotron"



export class Second extends Component {
    state = {
        search: "",
        results: []
      };

    componentDidMount() {
        // this.searchAddress();
      }
    
      searchAddress = query => {
        API.search(query)
          .then(res => {
            console.log(res.data.listings);

         
            this.setState({results: res.data.listings })
            console.log(res.data)
         
          })

           

          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    
      // When the form is submitted, search the Giphy API for `this.state.search`
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchAddress(this.state.search);
      };

    render() {
        return (
            <div>
                <NavBar/>
                <JumbotronSecond/>
                <ApiForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />

             <List>
                {this.state.results.map(result => (
                  <ListItem key={result.id}>
                      <strong>
                        <ul>
                          <Row>
                            <p>Address:</p>
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
        )
    }
}

export default Second
