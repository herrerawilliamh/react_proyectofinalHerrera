// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKinCm1v2J_SOQ6tk8J2cojkpllLz3ZjA",
  authDomain: "willycommerce-a222f.firebaseapp.com",
  projectId: "willycommerce-a222f",
  storageBucket: "willycommerce-a222f.appspot.com",
  messagingSenderId: "217175854347",
  appId: "1:217175854347:web:f5ee61766c7f52a1b8660e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);