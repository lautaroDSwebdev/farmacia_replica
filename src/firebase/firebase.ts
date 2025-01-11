// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQhXcQwpMV-OqdO7v8W6K9-M5_-ymxk_U",
  authDomain: "farmacia-5f702.firebaseapp.com",
  projectId: "farmacia-5f702",
  storageBucket: "farmacia-5f702.firebasestorage.app",
  messagingSenderId: "740228219697",
  appId: "1:740228219697:web:a3f3787963c2dd73296610"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const Firestore = getFirestore(app)
