// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChKyX3jLGvVuAkDWAAz5kt9xcOZn2chFY",
  authDomain: "govconnect-4dc30.firebaseapp.com",
  projectId: "govconnect-4dc30",
  storageBucket: "govconnect-4dc30.firebasestorage.app",
  messagingSenderId: "639742762000",
  appId: "1:639742762000:web:deb8d9150076da80b9fe95",
  measurementId: "G-LS0SRE3N84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;