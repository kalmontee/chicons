import React, {useEffect, useRef} from 'react';
import './jumbotron.css';
import {gsap} from "gsap"



export function JumbotronHome(props) {
   let header = useRef(null);
   let title = useRef(null);
   let paragraph = useRef(null);
   let search = useRef(null);
  
   

   useEffect(() =>{
      gsap.from(header, 2,{
         delay: 0.8,
         ease: "bouce.in",
         duration: 2.5,
  
         y: 50,
         stagger: {
            amount:0.15,
            
         }
      })

   },header)

   useEffect(() =>{
      gsap.from(title, 2,{
         delay: 1,
         ease: "power3.out",
         duration: 1,
         y: 50,
         stagger: {
            amount:0.15,
            
         }
      })

   },title)

   useEffect(() =>{
      gsap.from(paragraph, 2,{
         delay: 2,
         ease: "power3.out",
         duration: 1,
         y: 50,
         stagger: {
            amount:0.20,
            
         }
      })

   },paragraph)
   useEffect(() =>{
      gsap.from(search, 3,{
         delay: 2,
         ease: "bounce3.out",
         duration: 1,
         fade: 1,
         
         x: 50,
         stagger: {
            amount:0.25,
            
         }
      })

   },search)
   return (
      <header ref={element => header = element} className="header">
         <div className="jumbotronHome jumbotronSecond jumbotron-fluid">
            <h1 ref={element => title = element} className="jumbotronHome-title">Find your perfect home!</h1>
            <p ref={element => paragraph = element} className="lead">Type an Address to See Rental Estimates</p>

            <div ref={element => search = element} className="searchLocationForm">
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
            <p ref={element => header2 = element} className="lead">Post and Look for best rental deals</p>
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