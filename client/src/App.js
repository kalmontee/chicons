import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar" ;
import SignUp from "./components/Login/SignUp";
import SignIn from "./components/Login/SignIn";
import Poster from "./pages/Poster"
import Seeker from "./pages/Seeker"


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/apartments" component={Poster} />
        <Route exact path="/api" component={Seeker}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
