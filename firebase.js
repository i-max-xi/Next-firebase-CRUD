// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFireStore} from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzJnMAYR0oBy078IvYYw5o35Uizz4yHDk",
  authDomain: "next-firebase-cd55c.firebaseapp.com",
  projectId: "next-firebase-cd55c",
  storageBucket: "next-firebase-cd55c.appspot.com",
  messagingSenderId: "717345292138",
  appId: "1:717345292138:web:fc01757db04a551edaef13",
  measurementId: "G-6B9V8DFBE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore();
const analytics = getAnalytics(app);

export { db };