import React, { Component } from 'react';
import './login.css';

export class SignIn extends Component {
  render() {
    return (
      <div>
        <div id="login-box">
          <div class="left-box">
            <h1 id="signUp">Sign In</h1>

            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />

            <input type="submit" name="signup-button" value="Sign Up" />
          </div>

          <div class="example">
            <div class="exit-btn">
              <button id="exit">X</button>
            </div>

            <div class="right-box">
              <span class="signInWith">Sign in with <br /> Social Network</span>

              <button class="social facebook">Log in with Facebook</button>
              <button class="social twitter">Log in with Twitter</button>
              <button class="social google">Log in with Google</button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
