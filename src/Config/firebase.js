import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxcUmaa0kAF4RR2-0YwecHqtI13OuN9os",
  authDomain: "jbstore-db.firebaseapp.com",
  projectId: "jbstore-db",
  storageBucket: "jbstore-db.appspot.com",
  messagingSenderId: "929932117716",
  appId: "1:929932117716:web:18b80c82800cdc96aa5d41",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc, doc, getDoc };
