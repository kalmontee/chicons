import firebase from 'firebase';
import { firebaseKeys } from './keys';

const firebaseConfig = {
   apiKey: "", // throw env.API key here 
   authDomain: "chicons-c4c7d.firebaseapp.com",
   databaseURL: "https://chicons-c4c7d.firebaseio.com",
   projectId: "chicons-c4c7d",
   storageBucket: "chicons-c4c7d.appspot.com",
   messagingSenderId: "536616590989",
   appId: "1:536616590989:web:91d9e5004653d30c344cc4", // throw env.ID key here
   measurementId: "G-FX1FHKP4TV"
};

// const base = Rebase.createClass(app.database())
const fire = firebase.initializeApp(firebaseConfig);
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { fire, facebookProvider, googleProvider };