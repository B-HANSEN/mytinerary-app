import { GET_COMMENTS, COMMENTS_LOADING } from "./types";
import axios from "axios";  
  
  // retrieve favorites for specific user from database
  export const getComments = userId => dispatch => {
    dispatch(setCommentsLoading());
    axios.get("/api/comments/users/" + userId)
      .then(res => 
        {
        dispatch({
          type: GET_COMMENTS,
          payload: res.data
        })
      });
  };

  export const setCommentsLoading = () => {
    return {
      type: COMMENTS_LOADING
    };
  };