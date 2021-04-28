import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBKV2y0J7L2bxpGQkOD_ZeMg_a0U2QqDv0",
  authDomain: "nabnab-67f3a.firebaseapp.com",
  projectId: "nabnab-67f3a",
  storageBucket: "nabnab-67f3a.appspot.com",
  messagingSenderId: "470512071095",
  appId: "1:470512071095:web:dd689e6382e1bac21db832",
  measurementId: "G-CKNBWYJ4BN"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;