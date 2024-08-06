// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-website-2dc9e.firebaseapp.com",
  projectId: "blog-website-2dc9e",
  storageBucket: "blog-website-2dc9e.appspot.com",
  messagingSenderId: "1018533805575",
  appId: "1:1018533805575:web:69ced63a5d62983bb334a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);