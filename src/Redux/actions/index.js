export const GET_FIRST_ROW_SONGS = "GET_FIRST_ROW_SONGS";
export const GET_SECOND_ROW_SONGS = "GET_SECOND_ROW_SONGS";
export const GET_THIRD_ROW_SONGS = "GET_THIRD_ROW_SONGS";
// export const GET_SONGS = "GET_SONGS";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SELECTED = "SELECTED";

export const getSongsAction = (name, position) => {
  return async (dispatch) => {
    // console.log("Cosa sei tu?", getState());
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + name);
      if (response.ok) {
        let data = await response.json();
        // dispatch({
        //   type: GET_SONGS,
        //   payload: data,
        // });
        switch (position) {
          case "first":
            dispatch({
              type: GET_FIRST_ROW_SONGS,
              payload: data,
            });
            break;
          case "second":
            dispatch({
              type: GET_SECOND_ROW_SONGS,
              payload: data,
            });
            break;
          case "third":
            dispatch({
              type: GET_THIRD_ROW_SONGS,
              payload: data,
            });
            break;
          default:
            break;
        }
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log("Sad, you have an error:" + error);
    }
  };
};
