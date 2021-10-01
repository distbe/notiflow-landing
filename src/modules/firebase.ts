import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAD_UkpbYiFiBVppR4RpSIIc2NJ6sb_-bU",
  authDomain: "notiflow-24b2e.firebaseapp.com",
  projectId: "notiflow-24b2e",
  storageBucket: "notiflow-24b2e.appspot.com",
  messagingSenderId: "701917023498",
  appId: "1:701917023498:web:261a05a6bcbff561637ef3",
  measurementId: "G-0NDCE11S3R"
});

export const db = getFirestore();
