import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzuvNm3OyznhwdseQ9A09juzsEYP1Wv4",
  authDomain: "msgr-267c1.firebaseapp.com",
  projectId: "msgr-267c1",
  storageBucket: "msgr-267c1.firebasestorage.app",
  messagingSenderId: "708344580686",
  appId: "1:708344580686:web:c5d2460ed7db666252d11f",
  measurementId: "G-D5J5X9WC94"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
