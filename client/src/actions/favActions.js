import {
  GET_FAVORITES,
  FAVORITES_LOADING,
  FAVORITE_COUNT
} from "./types";

import axios from "axios";
import { loadUser } from './authActions';
import { getItineraries } from './itActions';


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
  // Request body for adding favs
  const body = { itinId: itinId };
    dispatch(setFavoritesLoading());
    axios.put("/api/favorites/users/" + id, body)
      .then(res => {
        dispatch(loadUser())
        }
      )};

export const removeFromFavorites = (favId, id) => dispatch => {
  console.log(favId, id)
  dispatch(setFavoritesLoading());
  axios.delete("/api/favorites/users/" + id + "/" + favId)
    .then(res => {

      dispatch({
        type: FAVORITE_COUNT,
        payload: favId
      })
      dispatch(loadUser())

      }
    )
};


// revise count of likes (Rating: )
// re-dispatch getItineraries to show update immediately
export const addLikes = (itinId, amount, cityId) => dispatch => {
  dispatch(setFavoritesLoading());
  console.log(amount, cityId);
  
  axios.put("/api/itineraries/"+ itinId + "/rating", { amount })
    .then(res => {
      dispatch({
        type: FAVORITE_COUNT,
        payload: res.data
        })
      dispatch(getItineraries(cityId))
      }
    )
};

export const removeLikes = (itinId, amount, cityId) => dispatch => {
  dispatch(setFavoritesLoading());

  axios.put("/api/itineraries/"+ itinId + "/rating", { amount })
    .then(res => {
      dispatch({
        type: FAVORITE_COUNT,
        payload: res.data
        })
        dispatch(getItineraries(cityId))
      }
    )
};

export const setFavoritesLoading = () => {
  return {
    type: FAVORITES_LOADING
  };
};