import React, { useEffect } from "react";
import Router from "./Router";
import firebase from "./firebase/config";
import { connect } from "react-redux";
import { setUsers } from "./actions/actions";
import { setUserDetails } from "./actions/authActions";

function App(props) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //set user state to user details
        props.setUserDetails(user);
      } else {
        //set user state to null
        props.setUserDetails(null);
      }
    });
  }, []);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((document) => {
        let users = [];

        document.forEach((doc) => {
          users.push(doc.data());
        });

        props.setUsers(users);
      });
  }, []);

  return <Router />;
}

const mapDispatchToProps = {
  setUsers,
  setUserDetails,
};

export default connect(null, mapDispatchToProps)(App);
