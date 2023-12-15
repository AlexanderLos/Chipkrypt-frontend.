import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-H8SEzBnXd0w8SS7Mx3ZQzTw34j1FYgE",
  authDomain: "chipkrypt.firebaseapp.com",
  projectId: "chipkrypt",
  storageBucket: "chipkrypt.appspot.com",
  messagingSenderId: "417115112190",
  appId: "1:417115112190:web:f65db14b348e3dc5d1dbaf",
  measurementId: "G-R6394JKRRT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
