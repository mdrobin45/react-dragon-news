import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCUN00XW0ZKW71qfM0hhZQPBSjPfAV1q9s",
   authDomain: "dragon-news-d8008.firebaseapp.com",
   projectId: "dragon-news-d8008",
   storageBucket: "dragon-news-d8008.appspot.com",
   messagingSenderId: "688271234421",
   appId: "1:688271234421:web:1afa5a40d3b300a2916f3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
