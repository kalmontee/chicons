
import React from 'react';
import './jumbotron.css'

function Jumbotron(props) {
   return (
      <header className="header">
         <div className="jumbotron">
            <h1 className="">Find your perfect home!</h1>
            {/* <p className="">Click on an image to earn points, but don't click on any more than once!</p> */}

            <form>
               <input
                  type="text"
                  id="quickSearch"
                  placeholder="Search your desire location"
                  className="quickSearchLookUp" />

               <input
                  type="submit"
                  name="search"
                  className="inputSearch" />
            </form>
         </div>
      </header>
   )
}

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Apartamentos</h1>
          <p className="lead">Post and Look for best spaces in your town</p>
        </div>
      </div>
    )
 }

export default Jumbotron;

