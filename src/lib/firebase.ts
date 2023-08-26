// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDfepuP6n9ROiGKS6ZMjSybO3AZLLtW6Q",
  authDomain: "svelte-fireship-fcf63.firebaseapp.com",
  projectId: "svelte-fireship-fcf63",
  storageBucket: "svelte-fireship-fcf63.appspot.com",
  messagingSenderId: "1012983526175",
  appId: "1:1012983526175:web:f428606f99467efd01362a",
  measurementId: "G-PFWTRR42M2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();