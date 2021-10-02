import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9E5ma2EnJX_nFV6dCazB-OdYFvRcdpG4",
    authDomain: "cosmos-nasa.firebaseapp.com",
    projectId: "cosmos-nasa",
    storageBucket: "cosmos-nasa.appspot.com",
    messagingSenderId: "927701530778",
    appId: "1:927701530778:web:ec645241c0c498d6cd0723"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };