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

    //1. Locate a user ref in Firestore
    //const userRef = firestore.doc('users/eMquSQPRzdhIr06H6sLT')
    //console.log("===> userRef: ");
    //console.log(userRef);
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    //console.log("===> userAuth.uid: ");
    //console.log(userAuth.uid);

    //2. Get a snapshot based on the user ref object 
    const snapShot = await userRef.get();
    console.log("===> snapShot: ");
    console.log(snapShot);

    //3. Check if the user ref snapshot is found in the Firestore
    if(!snapShot.exists) {
        //3a. Retrieve the displayName and email information 
        //    from the Firebase user authentication session
        const{displayName, email} = userAuth;
        const createdAt = new Date();

        //3b. Create a record in the Firestore storage 
        //    (because an existing user is not found in the Firestore DB )
        try {
          await userRef.set({
            displayName, email, createdAt, ...additionalData
          })
        } catch (error) {
          console.log('error creating user', error.message);
        }
    }

    return userRef;
    
  }

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;