// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-307e3.firebaseapp.com",
  projectId: "blog-307e3",
  storageBucket: "blog-307e3.appspot.com",
  messagingSenderId: "590620892076",
  appId: "1:590620892076:web:37a70f74ea5c2894b5f809",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
