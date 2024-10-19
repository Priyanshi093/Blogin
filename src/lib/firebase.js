// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../keys.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "blogin-cf040.firebaseapp.com",
  projectId: "blogin-cf040",
  storageBucket: "blogin-cf040.appspot.com",
  messagingSenderId: "543196026509",
  appId: "1:543196026509:web:9f04b175969d7f51b034c4",
  measurementId: "G-298G0GQ4GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)