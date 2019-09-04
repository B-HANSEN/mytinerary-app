import {
  GET_FAVORITES,
  FAVORITES_LOADING
} from "./types";
import axios from "axios";


// retrieve favorites for specific user from database
export const getFavorites = userId => dispatch => {
  // dispatch(setFavoritesLoading());
  axios.get("/api/favorites/users/" + userId)
    .then(res =>
      dispatch({
        type: GET_FAVORITES,
        payload: res.data
      })
    );
};

export const setFavoritesLoading = () => {
  return {
    type: FAVORITES_LOADING
  };
};