import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCuZJJirWzgqhmezEsgGMwjrBHsckd6iG0",
    authDomain: "unichat-a7b86.firebaseapp.com",
    projectId: "unichat-a7b86",
    storageBucket: "unichat-a7b86.appspot.com",
    messagingSenderId: "494755986343",
    appId: "1:494755986343:web:267e31be7b0b7f67729482"
  }).auth();