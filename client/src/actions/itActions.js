import { GET_ITINERARIES, ITINERARIES_LOADING } from './types';
import axios from 'axios';


export const getItineraries = () => dispatch  => {
    dispatch(setItinerariesLoading());
    axios
    .get("/api/itineraries")
    .then(res =>
        dispatch({
            type: GET_ITINERARIES,
            payload: res.data
        })
    )
};

export const setItinerariesLoading = () => {
    return {
        type: ITINERARIES_LOADING
    }
}