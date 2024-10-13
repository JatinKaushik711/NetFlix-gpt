// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL3ZcjvESx-Z5zNfguKUy96h9gECSbqW8",
  authDomain: "netflixgpt-52e7a.firebaseapp.com",
  projectId: "netflixgpt-52e7a",
  storageBucket: "netflixgpt-52e7a.appspot.com",
  messagingSenderId: "167637692717",
  appId: "1:167637692717:web:ddbc9442dc991853fce3a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();