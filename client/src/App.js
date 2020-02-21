
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from './config/Firebase';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
// import Login from './components/Login/Login';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          {/* {this.state.user ? (<Home />) : (<Favorites />)} */}
        </div>
      </Router>
    );
  }

}

export default App;
