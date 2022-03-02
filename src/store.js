import { createStore } from "redux";
import usersReducer from "./reducers/usersReducers";

export const store = createStore(usersReducer);
