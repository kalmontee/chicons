import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignIn, SignUp } from './pages/Login';
import Home from './pages/Home';
import Poster from "./pages/Poster";
import Seeker from "./pages/Seeker";
import Favorites from "./pages/Favorites";


function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apartments" component={Poster} />
            <Route exact path="/seeker" component={Seeker} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
