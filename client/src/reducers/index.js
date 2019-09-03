// root reducer to combine various reducers
import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itReducer from './itReducer';
import actReducer from './actReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import favReducer from './favReducer';

export default combineReducers ({
    city: cityReducer,
    itinerary: itReducer,
    activity: actReducer,
    error: errorReducer,
    auth: authReducer,
    favorite: favReducer
})