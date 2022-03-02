import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    { name: "John", email: "john@email.com", gen: 1, id: uuid() },
    { name: "Kofi", email: "kofu@email.com", gen: 2, id: uuid() },
  ],

  students: [],
  number: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "EDIT_USER":
      const editedUsers = state.users.map((user) => {
        if (user.id == action.payload.id) return action.payload.userData;
        return user;
      });

      return { ...state, users: editedUsers };

    case "DELETE_USER":
      const filteredUsers = state.users.filter((user) => {
        if (user.id != action.payload) return user;
      });

      return { ...state, users: filteredUsers };

    default:
      return state;
  }
};

export default usersReducer;
