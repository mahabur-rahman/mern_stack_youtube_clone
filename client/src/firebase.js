import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBihmQYzB9tqdh0w3_qwleRdjHlL1yNTVw",
  authDomain: "repeat-f1d0d.firebaseapp.com",
  projectId: "repeat-f1d0d",
  storageBucket: "repeat-f1d0d.appspot.com",
  messagingSenderId: "105421967361",
  appId: "1:105421967361:web:ace7c6f0c32bf9f8b03000",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// export default app;
