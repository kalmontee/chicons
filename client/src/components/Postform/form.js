import React from "react";
import "./form.css";

const Post = props => {

  return (
    <form id="form">
      <div className="form-group">
        <div className="row">
          <div className="col-sm">
            <label className="ApartmentPostLabel"><h3>Post your apartment for rent</h3></label>
            <br></br>
            <input className="form-control"
              value={props.username}
              type="text"
              name="username"
              placeholder="Name"
              onChange={props.handleInputChange}
            />
            <br></br>
            <input className="form-control"
              value={props.address}
              type="text"
              name="address"
              placeholder="Address"
              onChange={props.handleInputChange}
            />
          </div>
        </div>
        <br></br>
        <input className="form-control"
          value={props.bedroom}
          type="text"
          name="bedroom"
          placeholder="Bedrooms"
          onChange={props.handleInputChange}

        />
        <br></br>
        <label className="label">Apartment Description</label>
        <textarea className="form-control" rows="5"
          value={props.description}
          type="text"
          name="description"
          onChange={props.handleInputChange}
        />
        <br></br>
        <input className="form-control"
          value={props.phonenumber}
          type="number"
          name="phonenumber"
          placeholder="phone number"
          onChange={props.handleInputChange}
        />
        <br></br>
        <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Post