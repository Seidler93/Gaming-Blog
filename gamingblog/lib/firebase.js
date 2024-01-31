import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC6phRSsl0ZD5RAKlE4k1JLG4VdOE1V-Q4",
  authDomain: "gaming-blog-902b2.firebaseapp.com",
  projectId: "gaming-blog-902b2",
  storageBucket: "gaming-blog-902b2.appspot.com",
  messagingSenderId: "366184929415",
  appId: "1:366184929415:web:84f27c0e0521746d5d8022",
  measurementId: "G-9SM53TZ68M"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();