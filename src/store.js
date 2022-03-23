import { createStore, compose, applyMiddleware } from "redux";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import config from "./firebase/config";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducers";

export const store = createStore(
  usersReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(config),
    reduxFirestore(config)
  )
);
