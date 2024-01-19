// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwmssKkUTlqqbuZs1sIoZ8eBCO98uqSd0",
  projectId: "swiftcs-44ed9",
  storageBucket: "swiftcs-44ed9.appspot.com",
  messagingSenderId: "194533806709",
  appId: "1:238259654844:android:a8b35faf91eec1a0af00b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);