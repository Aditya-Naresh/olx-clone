import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHS7EXtsfdoHCPdqye4u6yozdS9rcioaI",
    authDomain: "fir-e53d8.firebaseapp.com",
    projectId: "fir-e53d8",
    storageBucket: "fir-e53d8.appspot.com",
    messagingSenderId: "93780664935",
    appId: "1:93780664935:web:7501d198a37d1d58f3eac2",
    measurementId: "G-C1KBRXTJ2Q"
  };



export  default firebase.initializeApp(firebaseConfig)