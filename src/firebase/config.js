// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Jews2TtSgHUf86tzAtdWOFqtHLTVFlQ",
  authDomain: "react-cursos-71885.firebaseapp.com",
  projectId: "react-cursos-71885",
  storageBucket: "react-cursos-71885.appspot.com",
  messagingSenderId: "874360514549",
  appId: "1:874360514549:web:fcf4d89d371cf90157e2bc"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuh = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );