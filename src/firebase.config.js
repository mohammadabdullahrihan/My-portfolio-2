import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsBVQ5jwMx-eJFERObZ5VsSLM2q7-Sesg",
  authDomain: "fire-form-bc8aa.firebaseapp.com",
  projectId: "fire-form-bc8aa",
  storageBucket: "fire-form-bc8aa.firebasestorage.app",
  messagingSenderId: "466512800160",
  appId: "1:466512800160:web:dc69d3abfb5764c0f1dcc5",
  measurementId: "G-J9ER6RTJL7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;