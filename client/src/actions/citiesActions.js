import { GET_CITIES, CITIES_LOADING } from './types';
// import { ADD_CITY, DELETE_CITY} from './types';  
import axios from 'axios';


export const getCities = () => dispatch  => {
    dispatch(setCitiesLoading());
    axios
    .get("/api/cities")
    .then(res =>
        dispatch({
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