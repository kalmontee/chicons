import React from "react";

function ApiForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search an Address</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an apartment"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default ApiForm;