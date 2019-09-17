import { GET_COMMENTS, COMMENTS_LOADING, ADD_COMMENT } from '../actions/types';

const initialState = {
    comments: [],
    comment: {},
    loading: false, 
    msg:"Hello world (from CommentsReducer)"
};

export default function(state = initialState, action) {
    switch (action.type) {
   
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            };

        case ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            };

        case COMMENTS_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}