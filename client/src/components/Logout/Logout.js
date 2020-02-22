import React from 'react';
// import fire from '../../config/Firebase';
import './logout.css';

function Logout(props) {

   return (
      <div>
         <button className="navbar-signout" onClick={() => props.logOutHandlerBtn()}>Logout</button>
      </div>
   )
}

export default Logout
