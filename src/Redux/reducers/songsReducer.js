import { GET_FIRST_ROW_SONGS, GET_SECOND_ROW_SONGS, GET_THIRD_ROW_SONGS } from "../actions";

const initialState = {
  content: {},
  first_row: {},
  second_row: {},
  third_row: {},
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIRST_ROW_SONGS:
      return {
        ...state,
        first_row: action.payload,
      };
    case GET_SECOND_ROW_SONGS:
      return {
        ...state,
        second_row: action.payload,
      };
    case GET_THIRD_ROW_SONGS:
      return {
        ...state,
        third_row: action.payload,
      };
    // case GET_SONGS:
    //   return {
    //     ...state,
    //     content: action.payload,
    //   };
    default:
      return state;
  }
};

export default songsReducer;
