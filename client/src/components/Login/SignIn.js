
// import React from 'react';
// import 'firebase/app';
// import './login.css';

// function SignIn(props) {
//    return (
//       <div>
//          <div id="login-box"
//             style={{
//                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
//                opacity: props.show ? '1' : '0',
//                transition: props.show ? "0.4s ease-in" : "0"
//             }}>
//             <div className="left-box">
//                <h1 id="signUp">Sign In</h1>
//                {/* <form> */}
//                   <input
//                      value={props.email}
//                      onChange={props.handleChange}
//                      type="email"
//                      name="email"
//                      placeholder="Email"
//                      className="signInEmailInput" />

//                   <input
//                      value={props.password}
//                      onChange={props.handleChange}
//                      type="password"
//                      name="password"
//                      placeholder="Password"
//                      className="signInPasswordInput" />

//                   <button
//                      onClick={() => props.loginBtn()}
//                      type="submit"
//                      className="signInBtn">
//                      Enter
//                   </button>
//                {/* </form> */}

//                <p style={{ color: "red" }}>{props.message}</p>
//             </div>

//             <div className="signInBackground">
//                <div className="exit-btn">
//                   <button
//                      onClick={() => props.closeModalHandler()}
//                      id="exit">
//                      X
//                   </button>
//                </div>

//                <div className="right-box">
//                   <span className="signInWith">Sign in with <br /> Social Network</span>

//                   <button className="social facebook" onClick={() => props.authWithFacebook()}>Log in with Facebook</button>
//                   <button className="social google" onClick={() => props.authWithGoogle()}>Log in with Google</button>
//                   <button className="social twitter">Log in with Twitter</button>
//                </div>
//             </div>
//          </div>
//       </div >
//    )

// }

// export default SignIn;
