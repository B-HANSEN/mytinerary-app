import { GET_ACTIVITIES, ACTIVITIES_LOADING } from '../actions/types';

const initialState = {
    activities: [],
    activity: {},
    loading: false, 
    msg:"Hello world (activities)"
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                loading: false
            }; 
            
        case ACTIVITIES_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}