export const GET_SONGS = "GET_SONGS";

export const getJobsAction = (name) => {
  return async (dispatch, getState) => {
    console.log("Cosa sei tu?", getState());
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + name);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
