import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC746pINmzjWSx0gmgBlck8Ucv9uVq90Cc",
  authDomain: "netflix-dupe-d2a12.firebaseapp.com",
  projectId: "netflix-dupe-d2a12",
  storageBucket: "netflix-dupe-d2a12.appspot.com",
  messagingSenderId: "1054955290808",
  appId: "1:1054955290808:web:16667bfc72abeda356344d",
  measurementId: "G-WDWM540PWS"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
