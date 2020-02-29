import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import withAuthProtection from './components/AuthProtection';
import { fire } from './config/Firebase';
import { SignIn, SignUp } from './pages/Login';
import Home from './pages/Home';
import Poster from "./pages/Poster";
import Seeker from "./pages/Seeker";
import Favorites from "./pages/Favorites";

const ProtectedProfile = withAuthProtection('/apartments')(Poster)
// const ProtectedFavorites = withAuthProtection('/SignIn')(Favorites)
class App extends Component {

  state = {
    user: fire.auth().currentUser,
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />

            {/* <Route exact path="/apartments" render={props => (
              (this.state.user === null) ? <SignIn /> : <Poster />
            )} /> */}

            {/* <Route exact path="/apartments" component={Poster} /> */}
            <Route exact path="/seeker" component={Seeker} />
            <Route exact path="/favorites" component={Favorites} />

            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />

            <Route exact
              path='/apartments'
              render={props => (
                <ProtectedProfile user={this.state.user} {...props} />
              )} />

            {/* <Route exact
            path='/favorites'
            render={props => (
              <ProtectedFavorites userFavorites={this.state.userFavorites} {...props} />
            )} 
            /> */}

            {/* <Route exact
              path='/seeker'
              render={props => (
                <ProtectedProfile user={this.state.user} {...props} />
              )} /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
