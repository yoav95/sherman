// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFQeGMLcWVhgliTrQ8u-VVz0gRDcNW_vg",
  authDomain: "sherman-nadlan.firebaseapp.com",
  databaseURL:
    "https://sherman-nadlan-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sherman-nadlan",
  storageBucket: "sherman-nadlan.appspot.com",
  messagingSenderId: "409987052431",
  appId: "1:409987052431:web:941f351ac7e52fe97e51fa",
  measurementId: "G-P6ZCJ9RQDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
