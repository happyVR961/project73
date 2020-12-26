import firebase from 'firebase';
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyAfXl8SHa5GQxmts_HaOvyXYlX04AJpT-8",
  authDomain: "story-hub-db671.firebaseapp.com",
  projectId: "story-hub-db671",
  storageBucket: "story-hub-db671.appspot.com",
  messagingSenderId: "552626397118",
  appId: "1:552626397118:web:14e35cf110cc026fd423ef"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();