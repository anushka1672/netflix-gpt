// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDTFmRoTTtb1z5VL3BXXpKP3p6fh3ZbVw",
  authDomain: "netflix-gpt-5ca19.firebaseapp.com",
  projectId: "netflix-gpt-5ca19",
  storageBucket: "netflix-gpt-5ca19.firebasestorage.app",
  messagingSenderId: "1020633187064",
  appId: "1:1020633187064:web:370eeed72dbc669b1ef10d",
  measurementId: "G-48TFRZ00L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();