// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAc74kkCfDDE11tn4NArBxFYD3eqZSgOac",

  authDomain: "nudge-app-ab789.firebaseapp.com",

  projectId: "nudge-app-ab789",

  storageBucket: "nudge-app-ab789.firebasestorage.app",

  messagingSenderId: "144446820871",

  appId: "1:144446820871:web:12356150db18f519da50a2",

  measurementId: "G-73GZJPPVGG"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);