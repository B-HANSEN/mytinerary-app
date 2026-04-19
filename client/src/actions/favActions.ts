import { GET_FAVORITES, FAVORITES_LOADING, FAVORITE_COUNT } from './types';
import axios from 'axios';
import type { AppDispatch } from '../store';
import { loadUser } from './authActions';
import { getItineraries } from './itActions';

// retrieve favorites for specific user from database
export const getFavorites = (userId: string) => (dispatch: AppDispatch) => {
  dispatch(setFavoritesLoading());
  axios.get('/api/favorites/users/' + userId).then((res) => {
    dispatch({ type: GET_FAVORITES, payload: res.data });
  });
};

// Like: add to favorites + increment rating, reload state only after both complete
export const likeItinerary =
  (itinId: string, userId: string, cityId: string) => async (dispatch: AppDispatch) => {
    dispatch(setFavoritesLoading());
    await axios.put('/api/favorites/users/' + userId, { itinId });
    await axios.put('/api/itineraries/' + itinId + '/rating', { amount: 1 });
    dispatch(loadUser());
    dispatch(getItineraries(cityId));
  };

// Unlike: remove from favorites + decrement rating, reload state only after both complete
export const unlikeItinerary =
  (itinId: string, userId: string, cityId: string) => async (dispatch: AppDispatch) => {
    dispatch(setFavoritesLoading());
    await axios.delete('/api/favorites/users/' + userId + '/' + itinId);
    await axios.put('/api/itineraries/' + itinId + '/rating', { amount: -1 });
    dispatch({ type: FAVORITE_COUNT, payload: itinId });
    dispatch(loadUser());
    dispatch(getItineraries(cityId));
  };

export const setFavoritesLoading = () => ({ type: FAVORITES_LOADING });
