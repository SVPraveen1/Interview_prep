// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACbgqKn3dZG-u1W6ncDhR0pD-bHFdQ3Nc",
  authDomain: "interviewx-9438b.firebaseapp.com",
  projectId: "interviewx-9438b",
  storageBucket: "interviewx-9438b.firebasestorage.app",
  messagingSenderId: "355779988683",
  appId: "1:355779988683:web:2f47e2af9cfd8d41f65f4e",
  measurementId: "G-RPNF42QP7P"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);