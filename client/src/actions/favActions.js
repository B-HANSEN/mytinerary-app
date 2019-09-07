import {
  GET_FAVORITES,
  FAVORITES_LOADING,
  FAVORITE_INC,
  FAVORITE_DEC,
  FAVORITE_COUNT
} from "./types";
import axios from "axios";


// retrieve favorites for specific user from database
export const getFavorites = userId => dispatch => {
  dispatch(setFavoritesLoading());
  axios.get("/api/favorites/users/" + userId)
    .then(res => 
      {
      console.log(res.data); 
      dispatch({
        type: GET_FAVORITES,
        payload: res.data
      })
    });
};

export const addToFavorites = (itinId, id) => dispatch => {
  console.log(itinId, id)
  // Request body for adding favs
const body = { itinId: itinId };
  dispatch(setFavoritesLoading());
  axios.put("/api/favorites/users/" + id, body)
    .then(res => dispatch({
            type: FAVORITE_INC,
            payload: res.data
        })
    )};

export const removeFromFavorites = (favId, id) => dispatch => {
  console.log(favId, id)
  dispatch(setFavoritesLoading());
  axios.delete("/api/favorites/users/" + id + "/" + favId)
    .then(res => dispatch({
            type: FAVORITE_DEC,
            payload: favId
        })
    )
};

export const countFavorites = () => dispatch => {
  dispatch(setFavoritesLoading());
  axios.get("/api/users/favorites")
    .then(res => dispatch({
            type: FAVORITE_COUNT,
            payload: res.data
        })
    )
};

export const setFavoritesLoading = () => {
  return {
    type: FAVORITES_LOADING
  };
};