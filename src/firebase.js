
import firebase  from './firebase.js';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnm6jV1VtHn7FsQe2zwOUzKC0Mr5Xuf0o",
  authDomain: "twitter-clone-bca42.firebaseapp.com",
  projectId: "twitter-clone-bca42",
  storageBucket: "twitter-clone-bca42.appspot.com",
  messagingSenderId: "509914918529",
  appId: "1:509914918529:web:741898b55ca0e0da5e6780",
  measurementId: "G-Q12L010CQJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

//2:40