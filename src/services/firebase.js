// Import the functions you need from the SDKs you need
import firebase from 'firebase'
require('firebase/auth')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYUBNSLw1GqKhk66ZEGYEyrNdUiBn3mXs",
  authDomain: "staffer-9fd4a.firebaseapp.com",
  projectId: "staffer-9fd4a",
  storageBucket: "staffer-9fd4a.appspot.com",
  messagingSenderId: "921004441598",
  appId: "1:921004441598:web:166fc1a1c99a317e438aaf",
  measurementId: "G-FY50VFRJMM"
};


// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

