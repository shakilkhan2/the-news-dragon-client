// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnvcUFp3uf7xLsnxl7fEqICv_loRgIYB8",
  authDomain: "the-news-dragon-8416a.firebaseapp.com",
  projectId: "the-news-dragon-8416a",
  storageBucket: "the-news-dragon-8416a.appspot.com",
  messagingSenderId: "948269260",
  appId: "1:948269260:web:276f4823ae9376221b5269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app