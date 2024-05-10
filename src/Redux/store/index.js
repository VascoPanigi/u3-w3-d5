import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songsReducers from "../reducers/songsReducer";

const rootReducer = combineReducers({
  homepageResults: songsReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
