import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOaYPor6YrHQCqnuVhULwOHWKHttP6kW8",
  authDomain: "to-do-25365.firebaseapp.com",
  projectId: "to-do-25365",
  storageBucket: "to-do-25365.appspot.com",
  messagingSenderId: "1000004516550",
  appId: "1:1000004516550:web:83ad04b2987cd0cf8ff5c7",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
