import { combineReducers } from '@reduxjs/toolkit';
import cityReducer from '../slices/citySlice';
import itineraryReducer from '../slices/itinerarySlice';
import activityReducer from '../slices/activitySlice';
import errorReducer from '../slices/errorSlice';
import authReducer from '../slices/authSlice';
import favoriteReducer from '../slices/favoriteSlice';
import commentReducer from '../slices/commentSlice';

export default combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer,
  activity: activityReducer,
  error: errorReducer,
  auth: authReducer,
  favorite: favoriteReducer,
  comment: commentReducer,
});
