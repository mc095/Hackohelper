// ./lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTOsGA4HHJOcoU72Uwc3hODQoLAM4zD2M",
  authDomain: "hackohelper.firebaseapp.com",
  projectId: "hackohelper",
  storageBucket: "hackohelper.appspot.com",
  messagingSenderId: "750692244922",
  appId: "1:750692244922:web:255c8ec48d6133f2fa5183",
  measurementId: "G-E7ZZ74E85C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize auth

export { app, db, auth }; // Export auth as well
