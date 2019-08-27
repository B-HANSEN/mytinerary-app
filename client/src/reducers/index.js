// root reducer to combine various reducers

import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itReducer from './itReducer';
import actReducer from './actReducer';

export default combineReducers ({
    city: cityReducer,
    itinerary: itReducer,
    activity: actReducer
})