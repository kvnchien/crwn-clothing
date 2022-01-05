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

  //Handle Create User Profile in Firestore
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log("===> In createUserProfileDocument: ");
    if(!userAuth) return;

    const userRef = firestore.doc('users/eMquSQPRzdhIr06H6sLT')
    console.log("===> userRef: ");
    console.log(userRef);

    const snapShot = await userRef.get();
    console.log("===> snapShot: ");
    console.log(snapShot);
    
  }

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;