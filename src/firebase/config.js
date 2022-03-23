// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkY581RdXYGFpK8kvJlfkpiewC_qFzwzw",
  authDomain: "users-contact-edit-delete.firebaseapp.com",
  projectId: "users-contact-edit-delete",
  storageBucket: "users-contact-edit-delete.appspot.com",
  messagingSenderId: "620164922309",
  appId: "1:620164922309:web:d3a1bc0c822a7b1597a9ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
