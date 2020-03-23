import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhQB13TG3TBSEuo-jJmfZBuNQbL0OEkQ4",
  authDomain: "eventclub-34838.firebaseapp.com",
  databaseURL: "https://eventclub-34838.firebaseio.com",
  projectId: "eventclub-34838",
  storageBucket: "eventclub-34838.appspot.com",
  messagingSenderId: "1015624415129",
  appId: "1:1015624415129:web:59a67504a9a38f43118508",
  measurementId: "G-V5D6T5E1ZC"
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
