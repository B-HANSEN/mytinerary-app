import {
  GET_ITINERARIES,
  ITINERARIES_LOADING,
  GET_ACTIVITIES,
  ACTIVITIES_LOADING,
  GET_COMMENTS,
  COMMENTS_LOADING
} from "./types";
import axios from "axios";

// retrieve itineraries for specific city from database
export const getItineraries = cityId => dispatch => {
  console.log(cityId);
  
  dispatch(setItinerariesLoading());
  axios.get("/api/itineraries/" + cityId).then(res =>
    dispatch({
      type: GET_ITINERARIES,
      payload: res.data
    })
  );
};

export const setItinerariesLoading = () => {
  return {
    type: ITINERARIES_LOADING
  };
};

// retrieve activities for specific itinerary from database
export const getActivities = itinId => dispatch => {
  dispatch(setActivitiesLoading());
  axios.get("/api/activities/" + itinId).then(res =>
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data
    })
  );
};

export const setActivitiesLoading = () => {
  return {
    type: ACTIVITIES_LOADING
  };
};

// retrieve comments for specific itinId from database
  export const getComments = itinId => dispatch => {
    dispatch(setCommentsLoading());
    axios.get("/api/comments/" + itinId).then(res => 
        dispatch({
          type: GET_COMMENTS,
          payload: res.data
        })
      );
  };

  export const setCommentsLoading = () => {
    return {
      type: COMMENTS_LOADING
    };
  };