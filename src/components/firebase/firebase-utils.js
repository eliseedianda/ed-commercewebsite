import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDouXgv2y05RwyeVEcQWRFo2zvdl3OELeY",
  authDomain: "ed-commercewebsite.firebaseapp.com",
  projectId: "ed-commercewebsite",
  storageBucket: "ed-commercewebsite.appspot.com",
  messagingSenderId: "550608993411",
  appId: "1:550608993411:web:647522e984a9f6237befb6",
  measurementId: "G-2W6S00ZM2L",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
