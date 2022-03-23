import React, { useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import firebase from "./firebase/config";
import { connect } from "react-redux";
import { setUsers } from "./actions/actions";

function App(props) {
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

  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
}

const mapDispatchToProps = {
  setUsers,
};

export default connect(null, mapDispatchToProps)(App);
