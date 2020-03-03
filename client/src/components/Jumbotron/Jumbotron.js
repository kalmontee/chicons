import React, {useEffect, useRef} from 'react';
import './jumbotron.css';
import {gsap} from "gsap"



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
   let header1 = useRef(null);
   let header2 = useRef(null);
   

   useEffect(() =>{
      gsap.from([header1, header2], 2,{
         delay: 0.8,
         ease: "power3.out",
         fade: 1,
         duration: 2.5,
         y: 50,
         stagger: {
            amount:0.15,
            
         }
      })

   },[header1, header2])
   return (
      <div  className="jumbotron jumbotron-fluid">
         <div className="container">
            <h1 ref={element => header1 = element} className="display-4">Fair Space</h1>
            <p ref={element => header2 = element} className="lead">Post and Look for best spaces in your town</p>
         </div>
      </div>
   )
}

export function JumbotronSecond() {
   return(
      <div className="jumbotron jumbotronSecond jumbotron-fluid">
         <div className="container">
            <h1 className="display-4">Fair Space</h1>
            <p className="lead">Type an Address to See Rental Estimates</p>
         </div>
      </div>
   )
}