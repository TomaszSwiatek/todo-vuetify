//we import just core of firebase insted of whole fb - this is /app folder.
import firebase from "firebase/app";
//we import additional func which we use.
import "firebase/firestore";

//thats the stuff we are import from our firebase.google.com, and then bookmark project overwiev and tag <> . There is how to start.
var config = {
  apiKey: "AIzaSyCSrIX7tuYx6BXcGAeFXMu1usDXNRFcymo",
  authDomain: "todo-witcher.firebaseapp.com",
  databaseURL: "https://todo-witcher.firebaseio.com",
  projectId: "todo-witcher",
  storageBucket: "todo-witcher.appspot.com",
  messagingSenderId: "785873573262"
};
firebase.initializeApp(config);

//thats initialize our connection to firestore and out database:
const db = firebase.firestore();

db.settings({
  //the way to work with time stamps - if we dont add this we gonna get warning from google
  timestampsInSnapshots: true
});

//at now we need to export our db var, becouse we want to import in the other file and use.
export default db;
