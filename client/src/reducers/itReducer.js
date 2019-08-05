import { GET_ITINERARIES, ITINERARIES_LOADING } from '../actions/types';

const initialState = {
    itineraries:  [],
    itinerary: {},
    loading: false, 
    msg:"Hello world (itineraries)"
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ITINERARIES:
            return {
                ...state,
                itineraries: action.payload,
                loading: false
            };
        case ITINERARIES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}