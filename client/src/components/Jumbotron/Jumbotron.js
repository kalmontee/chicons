import React from 'react';
import './jumbotron.css';

export function JumbotronHome(props) {
   return (
      <header className="header">
         <div className="jumbotronHome jumbotron-fluid">
            <h1 className="jumbotronHome-title">Find your perfect home!</h1>
            {/* <p className="">Click on an image to earn points, but don't click on any more than once!</p> */}

            <div className="searchLocationForm">
               <input
                  id="pac-input"
                  type="search"
                  name="search"
                  value={props.location}
                  placeholder="Search your desire location"
                  className="quickSearchLookUp"
                  onChange={props.handleSearchInput} />

               <button
                  placeholder="Search"
                  className="inputSearch"
                  onClick={() => props.handleFormSearchSubmit()}>
                  Search
               </button>
            </div>
         </div>
      </header>
   )
}

export function JumbotronApartments() {
   return (
      <div className="jumbotron jumbotron-fluid">
         <div className="container">
            <h1 className="display-4">Apartamentos</h1>
            <p className="lead">Post and Look for best spaces in your town</p>
         </div>
      </div>
   )
}

export function JumbotronSecond() {
   return(
      <div className="jumbotron jumbotronSecond jumbotron-fluid">
         <div className="container">
            <h1 className="display-4">Apartamentos</h1>
            <p className="lead">Type an Address to See Rental Estimates</p>
         </div>
      </div>
   )
}