import { GET_CITIES, CITIES_LOADING, SINGLE_CITY } from '../actions/types';

const initialState = {
    cities: [],
    city: {},
    loading: false, 
    msg:"Hello world"
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CITIES:
            console.log(action.payload);
            return {
                ...state,
                cities: action.payload,
                loading: false
            };
        case CITIES_LOADING:
            return {
                ...state,
                loading: true
            };
        case SINGLE_CITY:
            return {
                ...state,
                city: action.payload
            };
        default:
            return state;
    }
}