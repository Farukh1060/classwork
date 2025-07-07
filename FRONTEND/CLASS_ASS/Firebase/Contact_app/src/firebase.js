// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ5bIwhCq5YmBgPIodrnmJZjo-Nn1qhUg",
  authDomain: "contact-app-19e0c.firebaseapp.com",
  projectId: "contact-app-19e0c",
  storageBucket: "contact-app-19e0c.firebasestorage.app",
  messagingSenderId: "178281908631",
  appId: "1:178281908631:web:37e8e5c11a894821c3dcd2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)