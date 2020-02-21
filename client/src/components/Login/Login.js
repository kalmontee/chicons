// import React, { Component } from 'react'
// import fire from '../../config/Firebase';
// import './login.css'

// export class Login extends Component {

//    state = {
//       email: '',
//       password: ''
//    }

//    loginBtnHandler = (event) => {
//       event.preventDefault();
//       fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
//          .catch(err => console.log(err));
//    }

//    signUpBtnHandler = (event) => {
//       event.preventDefault();
//       fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//          .catch(err => console.log(err));
//    }

//    handleChange = (event) => {
//       this.setState({ [event.target.name]: event.target.value });
//    }

//    render() {
//       return (
//          <div>
//             <div id="login-box">
//                <div className="left-box">
//                   {/* Change the id name of the h1 */}
//                   <h1 id="signUp">Sign Up or Log In</h1> 

//                   <input
//                      value={this.state.email}
//                      onChange={this.handleChange}
//                      type="email"
//                      name="email"
//                      placeholder="Email" />

//                   <input
//                      value={this.state.password}
//                      onChange={this.handleChange}
//                      type="password"
//                      name="password"
//                      placeholder="Password" />

//                   <button
//                      onClick={this.loginBtnHandler}
//                      type="submit"
//                   >
//                      Log In
//                   </button>
//                   <button
//                      onClick={this.signUpBtnHandler}
//                      type="submit"
//                   >
//                      Sign Up
//                   </button>
//                </div>

//                <div className="example">
//                   <div className="exit-btn">
//                      <button id="exit">X</button>
//                   </div>

//                   <div className="right-box">
//                      <span className="signInWith">Sign up with <br /> Social Network</span>

//                      <button className="social facebook">Log in with Facebook</button>
//                      <button className="social twitter">Log in with Twitter</button>
//                      <button className="social google">Log in with Google</button>

//                   </div>
//                </div>
//             </div>
//          </div>
//       )
//    }
// }

// export default Login
