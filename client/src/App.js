
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar" ;
import fire from './config/Firebase';
import Home from './pages/Home';
import Poster from "./pages/Poster"
import Seeker from "./pages/Seeker"


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
 <Route exact path="/" component={Home} />
           <Route exact path="/apartments" component={Poster} />
          <Route exact path="/api" component={Seeker}/>
          <Route exact path="/favorites" component={Favorites} />

        </Switch>
      </div>
    </Router>
  );

}

export default App;
