import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar" ;
import SignUp from "./components/Login/SignUp";
import SignIn from "./components/Login/SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>Lets get to work!!!!</h1>
        <h3>Post your apartments</h3>

        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
      </div>
    </Router>
  );
}

export default App;
