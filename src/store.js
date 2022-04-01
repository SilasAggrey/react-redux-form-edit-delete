import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersReducer from "./reducers/usersReducers";
import authReducer from "./reducers/authReducers";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
