// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-russell.firebaseapp.com",
  projectId: "mern-russell",
  storageBucket: "mern-russell.appspot.com",
  messagingSenderId: "1043256954373",
  appId: "1:1043256954373:web:cfb47925ec4f692741566c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);