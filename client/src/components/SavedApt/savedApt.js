import React from "react";
import {Row, Col} from "../Grid/Grid"
// import DeleteBtn from "../DeleteBtn/delete"

const SavedApt = props => {
    return (props.favedApartments.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Apartments that You've Favored</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Apartments that You Saved</h3>
                    {props.favedApartments.map(favedapartment => {
                      
                        return (
                            
                            <li className="search-list list-group-item" key={favedapartment._id}>
                                <Row className="SearchResult" id={favedapartment.address + "Card"} key={favedapartment._id}>
                                   
                                    
                                    <Col size="1" className="emptyCol"/>
                                   
                                    <Col size="9" className="aptInfo">
                                        <Row>
                                            <h2 className="aptAddress">{favedapartment.address}</h2>
                                        </Row>
                                        <Row>
                                            <h3 className="aptBedrooms">Bedrooms: {favedapartment.bedroom}</h3>
                                        </Row>
                                        <Row>
                                            <p className="aptDescription">Description: {favedapartment.description}</p>
                                        </Row>
                                        <Row>
                                            <p className="aptPhoneNumber">Contact Info: {favedapartment.phonenumber}</p>
                                        </Row>
                                        <Row>
                                            <p className="aptUserName">Owner: {favedapartment.username}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                <button className="deleteApartment btn btn-danger" id={favedapartment._id} onClick={() => props.handleDeleteButton(favedapartment._id)}>
                                        Delete Book
                                    </button>
                                    
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedApt