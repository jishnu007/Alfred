// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv8bC1ydpxpGzvbilUg6WPHdWrPbxdaNQ",
  authDomain: "amfriend-efe73.firebaseapp.com",
  projectId: "amfriend-efe73",
  storageBucket: "amfriend-efe73.appspot.com",
  messagingSenderId: "402651786993",
  appId: "1:402651786993:web:d8f5068e6fbda2719f0350",
  measurementId: "G-C6D4KE1JK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)