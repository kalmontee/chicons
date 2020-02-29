
import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";
import { fire } from '../../config/Firebase';
import Logout from '../Logout/Logout';
import "./navbar.css";

class NavBar extends Component {
   state = {
      user: {},
   }

   componentDidMount = () => { 
      this.authListener();
   }

   authListener = () => {
      fire.auth().onAuthStateChanged((user) => {

         if (user) {
            this.setState({ user });
         } else {
            this.setState({ user: null });
            localStorage.removeItem('user');
         }
      });
   }

   // Logout btn
   logOutHandlerBtn = () => {
      fire.auth().signOut();
      this.props.history.push('/');
   }

   render() {

      let userIsLogInRender, userIsSignOutRender = null;
      if (this.state.user !== null) {
         userIsLogInRender = (
            <Logout logOutHandlerBtn={this.logOutHandlerBtn} />
         )
      } else {
         userIsSignOutRender = (
            <div className="navbar-login">
               <Link to="/SignUp" className={window.location.pathname === "/SignUp" ? "navbar-signUp" : "navbar-signUp"}>Sign Up</Link>
         
               <Link to="/SignIn" className={window.location.pathname === "/SignIn" ? "navbar-signIn" : "navbar-signIn"}>Sign In</Link>
            </div>
         )
      }

      return (
         <div className="navbar_container">
            {/* {this.state.signInModal || this.state.signUpModal ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null} */}

            <nav className="navbar">
               {!this.state.user ? (
                  <div className="navtabs-links">
                     {null}
                  </div>
               ) : (
                     <div>
                        <Link to="/favorites" className={window.location.pathname === "/favorites" ? "navbarTabsLink" : "favoritesLinkClick"}>
                           Favorites
                        </Link>

                        <Link to="/apartments" className={window.location.pathname === "/apartments" ? "navbarTabsLink" : "favoritesLinkClick"}>
                           Apartments
                        </Link>

                        <Link to="/seeker" className={window.location.pathname === "/seeker" ? "navbarTabsLink" : "favoritesLinkClick"}>
                           Seeker
                        </Link>
                     </div>
                  )}

               <div className="navbar-title">
                  <Link to="/" className={window.location.pathname === "/" ? "" : ""}>
                     DreamHome
                  </Link>
               </div>

               {userIsLogInRender}
               {userIsSignOutRender}
            </nav>
         </div>
      )
   }
}

export default withRouter(NavBar);