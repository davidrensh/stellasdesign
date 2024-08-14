// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyACK_0RU4jeD7yJNNtWqRnjeTa2yloHgFQ",
    authDomain: "stellas-design.firebaseapp.com",
    projectId: "stellas-design",
    storageBucket: "stellas-design.appspot.com",
    messagingSenderId: "732785184060",
    appId: "1:732785184060:web:246c8ca62aac5fcc266239",
    measurementId: "G-P1E0M0SV7M"    
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
export const storage = getStorage(app); // Added Firebase Storage
