import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {doc, setDoc } from "firebase/firestore";
import toast from 'react-hot-toast';


export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate=useNavigate()
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up function
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth,email,password)
  }
  

  function addUserToFirestore(uid, userData) {
    try {
      // Reference to the 'users' collection
      return setDoc(doc(db, "users", uid), userData);
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
    }
  }

  // Log out function
  function logout() {
    signOut(auth);
    toast.success('Logged out!')
    navigate('/')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
    addUserToFirestore,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}