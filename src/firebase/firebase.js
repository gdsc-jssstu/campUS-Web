import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
    // createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJ_ID,
//   storageBucket: import.meta.env.VITE_STORAGE,
//   messagingSenderId: import.meta.env.VITE_MSG_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCdEYfdQ1cUaC4lmcLEMKLFYkYaKaaZe1U",
  authDomain: "campus-web-cd526.firebaseapp.com",
  projectId: "campus-web-cd526",
  storageBucket: "campus-web-cd526.appspot.com",
  messagingSenderId: "144633949499",
  appId: "1:144633949499:web:7794912d9254d8e82fdb1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

export { auth, db };
