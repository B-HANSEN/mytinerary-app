import { GET_CITIES, CITIES_LOADING, SINGLE_CITY } from './types';
import axios from 'axios';


export const getCities = () => dispatch => {
    dispatch(setCitiesLoading());
    axios.get("/api/cities")
    .then(res => dispatch({
            type: GET_CITIES,
            payload: res.data
        })
    )
};

export const setCitiesLoading = () => {
    return {
        type: CITIES_LOADING
    }
}

export const getCityById = (id) => dispatch => {
    dispatch(setCitiesLoading());
    axios.get("/api/cities/" + id)
    .then(res => dispatch({
            type: SINGLE_CITY,
            payload: res.data
        })
    )
};
