// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBefjEf0pG60W8RvKFq7B1CpnkklIahR4M",
  authDomain: "netflixgpt-23c35.firebaseapp.com",
  projectId: "netflixgpt-23c35",
  storageBucket: "netflixgpt-23c35.appspot.com",
  messagingSenderId: "851474976937",
  appId: "1:851474976937:web:fc9fec6b069739cd0e59b8",
  measurementId: "G-KS3YL6Q822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()