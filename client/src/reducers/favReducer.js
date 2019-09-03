import { GET_FAVORITES, FAVORITES_LOADING } from '../actions/types';

const initialState = {
    favorites: [],
    favorite: {},
    loading: false, 
    msg:"Hello world (from favorites)"
};

export default function(state = initialState, action) {
    switch (action.type) {
   
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
                loading: false
            };
        case FAVORITES_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}