// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHfFw1VCJoTlUieKSS1O9UoA3bkfjzEhs",
  authDomain: "netflixgpt-61431.firebaseapp.com",
  projectId: "netflixgpt-61431",
  storageBucket: "netflixgpt-61431.firebasestorage.app",
  messagingSenderId: "585560356922",
  appId: "1:585560356922:web:262fc3c9f8239fe0925d03",
  measurementId: "G-H0B4996GYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();