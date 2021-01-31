import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBZtTXWZbsKIm3nRWzzW-do1o9ofdiOW8U",
  authDomain: "vaccine-2bdf7.firebaseapp.com",
  projectId: "vaccine-2bdf7",
  storageBucket: "vaccine-2bdf7.appspot.com",
  messagingSenderId: "161082136077",
  appId: "1:161082136077:web:691475da17f7779904e744",
  measurementId: "G-B912GD0K68"
};
  
  const app =document.getElementById('root')
  const dbapp=firebase.database().ref().child('root');
      dbapp.on('value',snap => console.log(snap.val()))
