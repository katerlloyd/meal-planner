import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNjnW7kQHbLnk67eFs8QXFEN-TG2-6cms",
  authDomain: "practice-df7f3.firebaseapp.com",
  projectId: "practice-df7f3",
  storageBucket: "practice-df7f3.appspot.com",
  messagingSenderId: "518821478472",
  appId: "1:518821478472:web:f64e5e9f4924d8d5c8d87d",
  measurementId: "G-HMYC6RV32V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
