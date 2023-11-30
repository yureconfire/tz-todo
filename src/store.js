import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import listReducer from "./features/List/listSlice";

const store = configureStore(
  {
    reducer: {
      list: listReducer,
    },
  },
  applyMiddleware(ThunkMiddleware)
);

export default store;
