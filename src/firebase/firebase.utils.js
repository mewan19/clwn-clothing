import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC_SSyXkC0zuUlWNIWGk0zWj38Jxay-goI",
    authDomain: "crwn-db-8fd3f.firebaseapp.com",
    projectId: "crwn-db-8fd3f",
    storageBucket: "crwn-db-8fd3f.appspot.com",
    messagingSenderId: "1007815832828",
    appId: "1:1007815832828:web:ffa26111a4444a37e45379",
    measurementId: "G-4M5T6V5CQX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle =() => auth.signInWithPopup(provider);


export default firebase;