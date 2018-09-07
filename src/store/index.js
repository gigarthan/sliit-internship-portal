import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "firebase";
import rootReducer from "./reducers/index";
import ReduxThunk from "redux-thunk";

const firebaseConfig = {
  apiKey: "AIzaSyD_bPZK6LOpJzjLCgH5hxffft5MEWryJ6g",
  authDomain: "sliit-internship-portal.firebaseapp.com",
  databaseURL: "https://sliit-internship-portal.firebaseio.com",
  projectId: "sliit-internship-portal",
  storageBucket: "sliit-internship-portal.appspot.com",
  messagingSenderId: "505623442902"
};

const rrfConfig = {};

firebase.initializeApp(firebaseConfig);

export function configStore(initialState) {
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig) // firebase instance as first argument
    // reduxFirestore(firebase) // <- needed if using firestore
  )(createStore);

  return createStoreWithFirebase(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument(getFirebase)))
  );
}
