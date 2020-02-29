import React, { Component } from 'react';
import { fire } from '../config/Firebase';
import Poster from '../pages/Poster';
import Favorites from '../pages/Favorites';
import Seeker from '../pages/Seeker';
import { SignIn } from '../pages/Login'

const withAuthProtection = redirectPath => WrappedComponent => {
   class WithAuthProtection extends Component {

      componentDidMount() {
         // use history from parent.
         const { history } = this.props;
         if (!fire.auth().currentUser) {
            // no auth at the beginning of the app, redirect them to login.
            return history.push("/SignIn")
         }
      }

      render() {
         const { user } = this.props;
         if (!user) {
            // don't render anything if no auth
            // return <SignIn />
            return <Poster />
            // return null
         }
         return <WrappedComponent {...this.props} />
      }
   }

   return WithAuthProtection
}

export default withAuthProtection;