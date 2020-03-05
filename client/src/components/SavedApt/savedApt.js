import React from "react";
import { Row, Col } from "../Grid/Grid";
import '../SavedApt/saveApt.css'

const SavedApt = props => {
  return (props.favedApartments.length === 0) ? (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h3>Apartments that You've Favored</h3>
        </div>
      </div>
    </div>
  ) : (
      <div className="card">
        <div className="card-body player">
          <div className="article">
            <h3 className="headerSaveAptTitle">Apartments that You Saved</h3>
            {props.favedApartments.map(favedapartment => {

              return (
                <li className="search-list list-group-item searchListItemApt" key={favedapartment._id}>
                  <Row className="SearchResult" id={favedapartment.address + "Card"} key={favedapartment._id}>
                    <Col size="1" className="emptyCol" />

                    <Col size="9" className="aptInfo">
                      <Row>
                        <h3 className="aptAddress">{favedapartment.address}</h3>
                      </Row>
                      <Row>
                        <p className="aptBedrooms">Bedrooms: {favedapartment.bedroom}</p>
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
                    <Col size="1" className="emptyCol" />
                    <Col size="9">
                      <button className="deleteApartment btn btn-danger" id={favedapartment._id} onClick={() => props.handleDeleteButton(favedapartment._id)}>
                        Delete Apt
                    </button>
                    </Col>
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