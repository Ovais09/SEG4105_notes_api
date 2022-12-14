// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBvD-rKBc9StUR8m-v9AZY1z53tqn-N_8Q",
//   authDomain: "seg4105-project.firebaseapp.com",
//   projectId: "seg4105-project",
//   storageBucket: "seg4105-project.appspot.com",
//   messagingSenderId: "228854692949",
//   appId: "1:228854692949:web:b0df07db1df4a94c76e8dc"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBTZ0Lzd5GYoFuJOM8AkKbCKLeBCn69fj4",
  authDomain: "practice-307db.firebaseapp.com",
  projectId: "practice-307db",
  storageBucket: "practice-307db.appspot.com",
  messagingSenderId: "426622062956",
  appId: "1:426622062956:web:f23ef33681ae63210aa349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
