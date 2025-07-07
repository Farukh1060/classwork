// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoBB_GSCKn3W0YN_l7keL0AqCCRs3cB-s",
  authDomain: "firestore-debb8.firebaseapp.com",
  projectId: "firestore-debb8",
  storageBucket: "firestore-debb8.firebasestorage.app",
  messagingSenderId: "480121310483",
  appId: "1:480121310483:web:967c8ba0a1ca5973ab5ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)