import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAtclGKRFnpT77aTmV8SuaaFkzhCNxfP5U",
    authDomain: "aimd-db.firebaseapp.com",
    projectId: "aimd-db",
    storageBucket: "aimd-db.appspot.com",
    messagingSenderId: "981663465775",
    appId: "1:981663465775:web:970e146ce95c7b4e0261da",
    measurementId: "G-LHW1P55K0B"
  };

firebase.initializeApp(config);

const firestore = firebase.firestore();

//CollectionRef
const item1 = firestore.collection('users').doc('eMquSQPRzdhIr06H6sLT').collection('careItems').doc('CJ8wGSFNbi0tax6944Me');
const myObject = firestore.collection('/users/eMquSQPRzdhIr06H6sLT/cartItems')

//DocumentRef
const item2 = firestore.doc('/users/eMquSQPRzdhIr06H6sLT/cartItems/CJ8wGSFNbi0tax6944Me')


console.log(item1);
console.log(item2);
console.log(myObject);

