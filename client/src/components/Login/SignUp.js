
import React from 'react';
import './login.css';

function SignUp(props) {
   return (
      <div>
         <div id="login-box"
            style={{
               transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
               opacity: props.show ? '1' : '0',
               transition: props.show ? "0.4s ease-in" : "0"
            }}>
            <div className="left-box">
               <h1 id="signUp">Create Account</h1>

               <input
                  value={props.email}
                  onChange={props.handleChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="signUpEmailInput" />

               <input
                  value={props.password}
                  onChange={props.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="signUpPasswordInput" />

               <button
                  onClick={() => props.signUp()}
                  type="submit"
                  className="signUpBtn">
                     Submit
               </button>

               <p style={{ color: "red" }}>{props.message}</p>
            </div>

            <div className="signUpBackground">
               <div className="exit-btn">
                  <button
                     style={{transition: props.show ? "0.4s ease-in" : "0"}}
                     onClick={() => props.closeModalHandler()}
                     id="exit">
                     X
                  </button>
               </div>

               <div className="right-box">
                  <span className="signInWith">Sign up with <br /> Social Network</span>

                  <button className="social facebook" onClick={() => props.authWithFacebook()}>Sign up with Facebook</button>
                  <button className="social google" onClick={() => props.authWithGoogle()}>Sign up with Google</button>
                  <button className="social twitter">Sign up with Twitter</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignUp;
