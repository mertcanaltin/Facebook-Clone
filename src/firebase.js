import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkWg3tLCp8ageSKqbsJKc5Goys9ZQJUeY",
  authDomain: "facebook-clone-4af08.firebaseapp.com",
  projectId: "facebook-clone-4af08",
  storageBucket: "facebook-clone-4af08.appspot.com",
  messagingSenderId: "36725157707",
  appId: "1:36725157707:web:70b239da874675a06c02ce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;