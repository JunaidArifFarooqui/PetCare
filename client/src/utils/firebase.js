// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "petcare-45e50.firebaseapp.com",
  projectId: "petcare-45e50",
  storageBucket: "petcare-45e50.firebasestorage.app",
  messagingSenderId: "772489351106",
  appId: "1:772489351106:web:f94af8d4f19ef1dee0905b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
