// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtRAh2VDaFoVVh5V2gPTKzG5shGDgubGo",
  authDomain: "fir-and-lottie.firebaseapp.com",
  projectId: "fir-and-lottie",
  storageBucket: "fir-and-lottie.appspot.com",
  messagingSenderId: "735531421637",
  appId: "1:735531421637:web:6d4b2cf301fe916c60c5ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
