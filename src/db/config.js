import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD_bPZK6LOpJzjLCgH5hxffft5MEWryJ6g",
  authDomain: "sliit-internship-portal.firebaseapp.com",
  databaseURL: "https://sliit-internship-portal.firebaseio.com",
  projectId: "sliit-internship-portal",
  storageBucket: "sliit-internship-portal.appspot.com",
  messagingSenderId: "505623442902"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;