// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ91AjMk9Yq-ejYMf2GmH1reDDvRcnQPg",
  authDomain: "eshoper-f28b3.firebaseapp.com",
  projectId: "eshoper-f28b3",
  storageBucket: "eshoper-f28b3.firebasestorage.app",
  messagingSenderId: "609375436398",
  appId: "1:609375436398:web:995b7e4c8c095151c4b07f",
  databaseURL:"https://eshoper-f28b3-default-rtdb.firebaseio.com/"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);