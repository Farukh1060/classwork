// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmS3GHkHQbEqFI4pc9zzS6zFb1kGgxe6Y",
  authDomain: "student-a2fe1.firebaseapp.com",
  projectId: "student-a2fe1",
  storageBucket: "student-a2fe1.firebasestorage.app",
  messagingSenderId: "979503734655",
  appId: "1:979503734655:web:d81c83ae84655b10d2c44a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);