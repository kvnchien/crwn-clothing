//firebase version 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAtclGKRFnpT77aTmV8SuaaFkzhCNxfP5U",
    authDomain: "aimd-db.firebaseapp.com",
    projectId: "aimd-db",
    storageBucket: "aimd-db.appspot.com",
    messagingSenderId: "981663465775",
    appId: "1:981663465775:web:970e146ce95c7b4e0261da",
    measurementId: "G-LHW1P55K0B"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if(!userAuth) return;
    console.log("In createUserProfileDocument: ")
    console.log(firestore.doc('users/eMquSQPRzdhIr06H6sLT'));
  }

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;