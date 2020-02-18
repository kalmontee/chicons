import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
   return (
      <nav className="navbar">
         <div className="navtabs">
            <span>Search</span>
            <span>Saved</span>
         </div>

         <div className="navbar-title">
            <Link to="/" class={window.location.pathname === "/"}>
               DreamHome
            </Link>
         </div>

         <div className="navbar-login">
            <Link to="/sign-up" class={window.location.pathname === "/sign-up" ? "navbar-signUp" : "navbar-signUp"}>
               Sign Up
            </Link>
            <Link to="/sign-in" class={window.location.pathname === "/sign-in" ? "navbar-signIn" : "navbar-signIn"}>
               Sign In
            </Link>
         </div>
      </nav>
   )
}

export default NavBar;