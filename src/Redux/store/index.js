import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songsReducers from "../reducers/songsReducer";
import favouriteReducer from "../reducers/favoriteReducer";
import selectedReducer from "../reducers/selectedReducer";

const rootReducer = combineReducers({
  homepageResults: songsReducers,
  favourites: favouriteReducer,
  selected: selectedReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
