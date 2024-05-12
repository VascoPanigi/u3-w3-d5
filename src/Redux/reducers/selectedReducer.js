import { SELECTED } from "../actions/index";

const initialState = {
  selected: undefined,
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED:
      return {
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default selectedReducer;
