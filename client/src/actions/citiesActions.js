import { GET_CITIES, ADD_CITY, DELETE_CITY} from './types';

export const getCities = () => {
    return {
        type: GET_CITIES
    }
};