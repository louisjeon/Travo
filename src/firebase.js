import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3eu2gg21c05x6a8-8XPSFA1erZgccXr0",
  authDomain: "travo-fcd0f.firebaseapp.com",
  databaseURL: "https://travo-fcd0f.firebaseio.com",
  projectId: "travo-fcd0f",
  storageBucket: "travo-fcd0f.appspot.com",
  messagingSenderId: "288406436895",
  appId: "1:288406436895:web:133f33b63733f3bc0e292a",
  measurementId: "G-JF46NJW2SN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
