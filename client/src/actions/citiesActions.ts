import { GET_CITIES, CITIES_LOADING, SINGLE_CITY } from './types';
import axios from 'axios';
import type { AppDispatch } from '../store';

export const getCities = () => (dispatch: AppDispatch) => {
  dispatch(setCitiesLoading());
  axios.get('/api/cities').then((res) =>
    dispatch({ type: GET_CITIES, payload: res.data })
  );
};

export const setCitiesLoading = () => ({ type: CITIES_LOADING });

export const getCityById = (id: string) => (dispatch: AppDispatch) => {
  dispatch(setCitiesLoading());
  axios.get('/api/cities/' + id).then((res) =>
    dispatch({ type: SINGLE_CITY, payload: res.data })
  );
};
