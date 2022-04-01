import React from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import firebase from "../firebase/config";

const Home = () => {
  const signOut = async () => {
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <UserForm />
      <div style={{ textAlign: "center" }}>
        <button className="w-42 btn btn-danger" onClick={signOut}>
          Sign out
        </button>
      </div>
      <UserList />
    </>
  );
};

export default Home;
