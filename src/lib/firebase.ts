import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCF6k5DVMZ-Do-KWO8zfGmmES61Kw_laDA",
  authDomain: "nativeapp-a429a.firebaseapp.com",
  projectId: "nativeapp-a429a",
  storageBucket: "nativeapp-a429a.appspot.com",
  messagingSenderId: "489523799307",
  appId: "1:489523799307:web:13ea476dfda835c8182e0e"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore()
export const auth = getAuth()