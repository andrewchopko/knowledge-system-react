import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAymABZAUfsrmSu-bilr2NsPLGo3WrI35Y",
  authDomain: "knowledge-system-bb6d5.firebaseapp.com",
  databaseURL: "https://knowledge-system-bb6d5.firebaseio.com",
  projectId: "knowledge-system-bb6d5",
  storageBucket: "knowledge-system-bb6d5.appspot.com",
  messagingSenderId: "732632406880"
};
  
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };