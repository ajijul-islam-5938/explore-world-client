// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1xZHbXUsimPO1-ONoEipQREvWxXY4SXQ",
  authDomain: "assignment-10-9a5c8.firebaseapp.com",
  projectId: "assignment-10-9a5c8",
  storageBucket: "assignment-10-9a5c8.appspot.com",
  messagingSenderId: "737046722553",
  appId: "1:737046722553:web:bb540cff1d7384aa676f28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;