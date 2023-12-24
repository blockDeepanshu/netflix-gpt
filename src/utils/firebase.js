// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsIaxop3vKfUxq-tQCGQbhhR1bu41f5tA",
  authDomain: "netflixgpt-5ecf4.firebaseapp.com",
  projectId: "netflixgpt-5ecf4",
  storageBucket: "netflixgpt-5ecf4.appspot.com",
  messagingSenderId: "791896409884",
  appId: "1:791896409884:web:3cd3091836b07f0a9a1cd9",
  measurementId: "G-NKQDHB4PLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
