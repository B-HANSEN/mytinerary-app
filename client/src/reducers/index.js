// root reducer to combine various reducers

import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itReducer from './itReducer';

export default combineReducers ({
    city: cityReducer,
    itinerary: itReducer
})