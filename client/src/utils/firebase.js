

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-625c2.firebaseapp.com",
  projectId: "interviewiq-625c2",
  storageBucket: "interviewiq-625c2.firebasestorage.app",
  messagingSenderId: "231829263371",
  appId: "1:231829263371:web:e3b453acdfeec7d0a3e30e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };