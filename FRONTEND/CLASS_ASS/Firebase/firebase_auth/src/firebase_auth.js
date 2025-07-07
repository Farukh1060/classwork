// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsFu0mi5249dZ-bfY0Fe-AXZ5QbIvaaME",
  authDomain: "auth-ea59a.firebaseapp.com",
  projectId: "auth-ea59a",
  storageBucket: "auth-ea59a.firebasestorage.app",
  messagingSenderId: "561949771856",
  appId: "1:561949771856:web:1ad1a45ba3a4e7f45b6955"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
