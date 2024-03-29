import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId 
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider;