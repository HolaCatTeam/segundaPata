import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCBrUoA-HM0pISq6zSWfa7M3CdiGAdjTlo",
    authDomain: "nd-paw.firebaseapp.com",
    databaseURL: "https://nd-paw.firebaseio.com",
    projectId: "nd-paw",
    storageBucket: "nd-paw.appspot.com",
    messagingSenderId: "566588632593"
};
const fire = firebase.initializeApp(config);
export default fire;
