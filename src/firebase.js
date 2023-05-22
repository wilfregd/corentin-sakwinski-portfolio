// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8riJB5hbyXPzevS2Fkkd_Bd2xiXvW0a8",
  authDomain: "corentin-sakwinski-portfolio.firebaseapp.com",
  projectId: "corentin-sakwinski-portfolio",
  storageBucket: "corentin-sakwinski-portfolio.appspot.com",
  messagingSenderId: "578005180931",
  appId: "1:578005180931:web:ff440d378a886dd1d3e436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;