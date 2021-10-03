import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnfoQYzGtmvA68uo-oad0G4hGc8BZUAyk",
  authDomain: "signupfig.firebaseapp.com",
  projectId: "signupfig",
  storageBucket: "signupfig.appspot.com",
  messagingSenderId: "815941235662",
  appId: "1:815941235662:web:48de20beb590dc46ed319f",
  measurementId: "G-7YFR555K0G"
};

 firebase.initializeApp(firebaseConfig);

export {firebase};