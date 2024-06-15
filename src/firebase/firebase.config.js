// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUkkr9CS2oZH11T6YFBkU6zytv41bz5T8",
  authDomain: "auth-3f701.firebaseapp.com",
  projectId: "auth-3f701",
  storageBucket: "auth-3f701.appspot.com",
  messagingSenderId: "719458849081",
  appId: "1:719458849081:web:757cdd28d74835150398e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
