/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import firestore module
import { getAuth } from "firebase/auth";

// Configuración del proyecto original (Firestore)
const firestoreConfig = {
  apiKey: "AIzaSyDF72681dY91QYzgqdTVnCf1EtOcGFeS-M",
  authDomain: "e-commerce-1f616.firebaseapp.com",
  projectId: "e-commerce-1f616",
  storageBucket: "e-commerce-1f616.appspot.com",
  messagingSenderId: "22868744350",
  appId: "1:22868744350:web:19f20d01385d9e097ac38f",
  measurementId: "G-0LFDPZ8CR9",
};

// Configuración del nuevo proyecto (Auth)
const authConfig = {
  apiKey: "AIzaSyAZKo5EAQTlIXcTxXSK0AlEEu6yQuLzZps",
  authDomain: "ecomerce-webauth.firebaseapp.com",
  projectId: "ecomerce-webauth",
  storageBucket: "ecomerce-webauth.firebasestorage.app",
  messagingSenderId: "597315927644",
  appId: "1:597315927644:web:1e0e1bcdeaed36b1147099",
  measurementId: "G-Z7995JT3BR",
};

// Inicializar ambas aplicaciones
let firestoreApp, authApp, firestore, auth;

try {
  firestoreApp = initializeApp(firestoreConfig, "firestoreApp"); // Instancia para Firestore
  authApp = initializeApp(authConfig, "authApp"); // Instancia para Auth
  firestore = getFirestore(firestoreApp); // Inicializa Firestore
  auth = getAuth(authApp); // Inicializa Auth
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { auth, firestore, AuthContext }; // Exporta firestore, auth y AuthContext
