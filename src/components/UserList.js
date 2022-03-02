import React from "react";
import { useSelector } from "react-redux";
import User from "./User";


const UserList = () => {
  const users = useSelector((state) => {
    return state.users;
  });

  return (
    <div>
        <h1 className="d-flex justify-content-center">User list</h1>
     {users.map((user, index) => {
        return <User key={`${index}-${user.name}`} user={user} />;
      })}
    </div>
  );
};


export default UserList;