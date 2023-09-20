import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firstore';

const firestoreConfig = {
  apiKey: 'AIzaSyBijTzbiFrfJO1HsQrY1Iho8-d_nj1rbOY',
  authDomain: 'mas-max.firebaseapp.com',
  projectId: 'mas-max',
  storageBucket: 'mas-max.appspot.com',
  messagingSenderId: '98054029537',
  appId: '1:98054029537:web:4e80007dc2a16a9f2977a0',
  measurementId: 'G-MTH4RFCQM6',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firestoreConfig);
}
export {firebase};
