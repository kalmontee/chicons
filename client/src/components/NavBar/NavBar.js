
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

   closeModalHandler = () => this.setState({ signUpModal: false, signInModal: false });

   handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

   logOutHandlerBtn = () => {
      fire.auth().signOut();
      this.setState({ redirect: true });
   }

   authWithFacebook = () => {
      fire.auth().signInWithPopup(facebookProvider)
         .then((result, err) => {
            if (err) {
               alert("Unable to sign in with Facebook");
            } else {
               this.setState({ signUpModal: false, signInModal: false });
            }
         })
         .catch(err => alert(err));
   }

   authWithGoogle = () => {
      console.log("CLick")
      fire.auth().signInWithPopup(googleProvider)
         .then((result, err) => {
            if (err) {
               alert("Unable to sign in with Google")
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

   hideModalLogins = () => this.setState({ signInModal: false, signUpModal: false });

   loginBtn = () => {
      const email = this.state.email;
      const password = this.state.password;

      // this.setState({ message: "*Incorrect Password" });

      fire.auth().signInWithEmailAndPassword(email, password)
         .then(user => {
            this.hideModalLogins();
         })
         .catch(err => {
            alert(err);
            this.setState({ signInModal: true });
         });
   }

   signUp = () => {
      const email = this.state.email;
      const password = this.state.password;

      fire.auth().createUserWithEmailAndPassword(email, password)
         .then(user => {
            this.hideModalLogins();
         })
         .catch(err => {
            alert(err);
            this.setState({ signUpModal: true });
         })
   }

   // ============================================================= render

   render() {

      // if (this.state.redirect === true) {
      //    return <Redirect to="/" />
      // }

      let signUpModalRender = null;
      if (this.state.signUpModal) {
         signUpModalRender = (
            <SignUp
               email={this.props.email}
               password={this.props.password}
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

      let userIsLogInOrSignOut = null;
      if (this.state.user !== null) {
         userIsLogInOrSignOut = (
            <Logout logOutHandlerBtn={this.logOutHandlerBtn} />
         )
      } else {
         userIsLogInOrSignOut = (
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
                        <Link to="/favorites" className={window.location.pathname === "/favorites" ? "favorites" : "favoritesLinkClick"}>
                           Favorites
                        </Link>

                        <Link to="/post" className={window.location.pathname === "/post" ? "favorites active" : "favoritesLinkClick"}>
                           Post
                        </Link>
                     </div>
                  )}

               <div className="navbar-title">
                  <Link to="/" className={window.location.pathname === "/"}>
                     DreamHome
                  </Link>
               </div>

               {userIsLogInOrSignOut}
            </nav>

            {signUpModalRender}
            {signInModalRender}
         </div>
      )
   }
}

export default NavBar;


