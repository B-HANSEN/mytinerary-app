import { GET_FAVORITES, FAVORITES_LOADING, FAVORITE_INC, FAVORITE_DEC, FAVORITE_COUNT } from '../actions/types';

const initialState = {
    favorites: [],
    favorite: {},
    liked: false,
    favoriteCount: "",
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

        case FAVORITE_INC:
            return {
                ...state,
                addToFavorites: action.payload
            }

        case FAVORITE_DEC:
                return {
                    ...state,
                    removeFromFavorites: action.payload
                }

        case FAVORITE_COUNT:
            return {
                ...state,
                favoriteCount: action.payload,
                loading: false
            }
        default:
            return state;
    }
}