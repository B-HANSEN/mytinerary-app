import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../action/types';

const initialState = {
 items:  [
     { id: uuid(), country: 'Spain', city: 'Madrid' },
     { id: uuid(), country: 'Germany', city: 'Berlin' }
 ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
            default:
            return state;
    }
};