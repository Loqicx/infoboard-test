import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // redacted
  };

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}