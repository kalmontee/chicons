
import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { fire, facebookProvider, googleProvider } from '../../config/Firebase';
import SignUp from '../Login/SignUp';
import SignIn from '../Login/SignIn';
import Logout from '../Logout/Logout';
import "./navbar.css";

class NavBar extends Component {
   state = {
      user: {},
      email: '',
      password: '',
      message: '',
      signUpModal: false,
      signInModal: false,
      redirect: false,
   }

   componentDidMount = () => this.authListener();

   navBarSignUpBtn = () => this.setState({ signUpModal: true });

   navBarSignInBtn = () => this.setState({ signInModal: true });

   closeModalHandler = () => this.setState({ signUpModal: false, signInModal: false, message: "" });

   hideModalLogins = () => this.setState({ signInModal: false, signUpModal: false });

   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   }

   // Logout btn
   logOutHandlerBtn = () => {
      fire.auth().signOut();
      this.setState({ redirect: true });
   }

   // Sign In/Up with Facebook
   authWithFacebook = () => {
      fire.auth().signInWithPopup(facebookProvider)
         .then((result, err) => {
            if (err) {
               alert("Unable to sign in with Facebook...please try again.");
            } else {
               this.setState({ signUpModal: false, signInModal: false });
            }
         })
         .catch(err => alert(err));
   }

   // Sign In/Up with Google
   authWithGoogle = () => {
      console.log("CLick")
      fire.auth().signInWithPopup(googleProvider)
         .then((result, err) => {
            if (err) {
               alert("Unable to sign in with Google...please try again.")
            } else {
               this.setState({ signUpModal: false, signInModal: false })
            }
         })
         .catch(err => alert(err));
   }

   authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
         console.log(user);

         if (user) {
            this.setState({ user });
         } else {
            this.setState({ user: null });
            localStorage.removeItem('user');
         }
      });
   }

   loginBtn = () => {
      const email = this.state.email;
      const password = this.state.password;

      fire.auth().signInWithEmailAndPassword(email, password)
         .then(user => {
            console.log(user);
            this.hideModalLogins();
         })
         .catch(err => {
            console.log(err);
            this.setState({ message: "*Incorrect Password or Email" });
            this.setState({ signInModal: true });
         });
   }

   signUp = () => {
      const email = this.state.email;
      const password = this.state.password;

      fire.auth().createUserWithEmailAndPassword(email, password)
         .then(user => {
            console.log(user);
            this.hideModalLogins();
         })
         .catch(err => {
            console.log(err);
            this.setState({ message: "*The email address is already in use by another account. Please try another one." });
            this.setState({ signUpModal: true });
         });
   }

   // ============================================================= render

   render() {

      if (this.state.redirect === true) {
         return <Redirect to="/" />
      }

      let signUpModalRender = null;
      if (this.state.signUpModal) {
         signUpModalRender = (
            <SignUp
               email={this.props.email}
               password={this.props.password}
               message={this.state.message}
               show={this.state.signUpModal}
               handleChange={this.handleChange}
               closeModalHandler={this.closeModalHandler}
               signUp={this.signUp}
               authWithFacebook={this.authWithFacebook}
               authWithGoogle={this.authWithGoogle}
            />
         )
      }

      let signInModalRender = null;
      if (this.state.signInModal) {
         signInModalRender = (
            <SignIn
               email={this.props.email}
               password={this.props.password}
               message={this.state.message}
               show={this.state.signInModal}
               handleChange={this.handleChange}
               closeModalHandler={this.closeModalHandler}
               loginBtn={this.loginBtn}
               authWithFacebook={this.authWithFacebook}
               authWithGoogle={this.authWithGoogle}
            />
         )
      }

      let userIsLogInRender, userIsSignOutRender = null;
      if (this.state.user !== null) {
         userIsLogInRender = (
            <Logout logOutHandlerBtn={this.logOutHandlerBtn} />
         )
      } else {
         userIsSignOutRender = (
            <div className="navbar-login">
               <button
                  onClick={this.navBarSignUpBtn}
                  className="navbar-signUp">
                  Sign Up
            </button>
               <button
                  onClick={this.navBarSignInBtn}
                  className="navbar-signIn">
                  Sign In
            </button>
            </div>
         )
      }

      // let closeModalHandlerRender = null;
      // if (this.state.signUpModal || this.state.signInModal) {
      //    closeModalHandlerRender = (
      //       <div onClick={this.closeModalHandler} className="back-drop"></div>
      //    )
      // } else {
      //    return null;
      // }

      return (
         <div>
            {this.state.signInModal || this.state.signUpModal ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

            <nav className="navbar">
               {!this.state.user ? (
                  <div className="navtabs-links">
                     {/* <span>{null}</span>
                     <span>{null}</span> */}
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

                        <Link to="/api" className={window.location.pathname === "/api" ? "navbarTabsLink" : "favoritesLinkClick"}>
                           Seeker
                        </Link>
                     </div>
                  )}

               <div className="navbar-title">
                  <Link to="/" className={window.location.pathname === "/"}>
                     DreamHome
                  </Link>
               </div>

               {userIsLogInRender}
               {userIsSignOutRender}
            </nav>

            {signUpModalRender}
            {signInModalRender}

         </div>
      )
   }
}

export default NavBar;


