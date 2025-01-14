import firebase from 'firebase';
// import API from '../utils/API';

const firebaseConfig = {
   apiKey: "{}", // throw env.API key here 
   authDomain: "chicons-c4c7d.firebaseapp.com",
   databaseURL: "https://chicons-c4c7d.firebaseio.com",
   projectId: "chicons-c4c7d",
   storageBucket: "chicons-c4c7d.appspot.com",
   messagingSenderId: "536616590989",
   appId: "{}", // throw env.ID key here
   measurementId: "G-FX1FHKP4TV"
};

const fire = firebase.initializeApp(firebaseConfig);
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { fire, facebookProvider, googleProvider };