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
  apiKey: "AIzaSyAhxATFh9ocH8HLMDXQ2N3rUDl_4c92cLI",
  authDomain: "contribution-14183.firebaseapp.com",
  projectId: "contribution-14183",
  storageBucket: "contribution-14183.appspot.com",
  messagingSenderId: "500510515214",
  appId: "1:500510515214:web:f9b6be43d2d76b8d1e9c5f",
  measurementId: "G-FVNZK3S89F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

export { auth, db };
