import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCNlq7vZ6A0D6Pc-7FEkqox58eRL0oaTEE",
    authDomain: "jokenotes-9f406.firebaseapp.com",
    projectId: "jokenotes-9f406",
    storageBucket: "jokenotes-9f406.appspot.com",
    messagingSenderId: "133645629070",
    appId: "1:133645629070:web:13477fa7532daa97d07bdf"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);