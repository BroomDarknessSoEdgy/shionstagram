import { initializeApp } from "firebase/app";// import "firebase/firestore";
import { getDatabase } from "firebase/database";
const config = {
    apiKey: "AIzaSyAnKtHBVcnDq7gcHwHWzxBGq-RFZvac5xM",
    authDomain: "chat-912ee.firebaseapp.com",
    databaseURL: "https://chat-912ee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-912ee",
    storageBucket: "chat-912ee.appspot.com",
    messagingSenderId: "228232203611",
    appId: "1:228232203611:web:29a96f9b7069578c701e7e",
    measurementId: "G-S85HE5WDWH"
  };

const app = initializeApp(config);
const rdb = getDatabase(app)
export default rdb;