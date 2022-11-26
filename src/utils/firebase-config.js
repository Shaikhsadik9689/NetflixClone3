import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvBJa7UwJm4xH6U389-Jx7vAHmBcg43x4",
  authDomain: "nnetflixclone-867b8.firebaseapp.com",
  projectId: "nnetflixclone-867b8",
  storageBucket: "nnetflixclone-867b8.appspot.com",
  messagingSenderId: "483943775532",
  appId: "1:483943775532:web:acc0c5fc6438b11e9ec089",
  measurementId: "G-ZH3STYTFMC"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)

