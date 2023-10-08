// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDddqv3bEeYScYbddhkHsXvAsxOntKpa8s",
  authDomain: "ecommerceredeluces.firebaseapp.com",
  projectId: "ecommerceredeluces",
  storageBucket: "ecommerceredeluces.appspot.com",
  messagingSenderId: "640400682213",
  appId: "1:640400682213:web:9acd46b9c2afbd210fb80c",
  measurementId: "G-GTM9WETVET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);