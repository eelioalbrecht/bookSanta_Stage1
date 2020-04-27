import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCBsqcSU_G3uebD4HnhJlncWzlI7tJBPUs",
  authDomain: "book-santa-b5e65.firebaseapp.com",
  databaseURL: "https://book-santa-b5e65.firebaseio.com",
  projectId: "book-santa-b5e65",
  storageBucket: "book-santa-b5e65.appspot.com",
  messagingSenderId: "376812826181",
  appId: "1:376812826181:web:aa81e824bb712e1652fd2c"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();


  