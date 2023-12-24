// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJYbV1pnUpILv6EsBppc0RbOtIbISKi7E",
  authDomain: "twitterclone-11a3d.firebaseapp.com",
  projectId: "twitterclone-11a3d",
  storageBucket: "twitterclone-11a3d.appspot.com",
  messagingSenderId: "1842900774",
  appId: "1:1842900774:web:ddaa8601f3c2a5f320dbe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmenin refarınsını alma
export const auth = getAuth(app);

// google sağlayıcı kurulum
export const provider = new GoogleAuthProvider();

// veirtabının referansını alma
export const db = getFirestore(app);

// depolam alanın referansını alma
export const storage = getStorage(app);