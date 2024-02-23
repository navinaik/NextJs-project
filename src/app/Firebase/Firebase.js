
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC6TmJGjBl-s9YtELgtM-ElD8-VppC0n6s",
  authDomain: "nextjs-3c727.firebaseapp.com",
  projectId: "nextjs-3c727",
  storageBucket: "nextjs-3c727.appspot.com",
  messagingSenderId: "943208072396",
  appId: "1:943208072396:web:80b698bdcdbad76c4bee69",
  measurementId: "G-KXSR0Q4D15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db