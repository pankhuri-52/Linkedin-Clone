// Pasting firebase config from firebase settings

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDu9NLgm-xaDNB33ecuucksWDYyO7ISfUk",
    authDomain: "linkedin-clone-9da52.firebaseapp.com",
    projectId: "linkedin-clone-9da52",
    storageBucket: "linkedin-clone-9da52.appspot.com",
    messagingSenderId: "1047587981962",
    appId: "1:1047587981962:web:b125cdbefa6b1671107b73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //It connects everything to firebase database
  const db = firebaseApp.firestore(); //go to the firestore for the database
  const auth = firebase.auth(); //gives access for authentication

  export {db, auth};
  //because we need both of these variables outside this file