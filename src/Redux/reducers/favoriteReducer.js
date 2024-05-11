import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions/index";

const initialState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.concat(action.payload),
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((song) => song !== action.payload),
      };

    default:
      return state;
  }
};

export default favouriteReducer;
