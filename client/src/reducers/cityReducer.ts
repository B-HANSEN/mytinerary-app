import { GET_CITIES, CITIES_LOADING, SINGLE_CITY } from '../actions/types';
import type { City } from '../types';

interface CityState {
  cities: City[];
  city: Partial<City>;
  loading: boolean;
  msg: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Action = { type: string; payload?: any };

const initialState: CityState = {
  cities: [],
  city: {},
  loading: false,
  msg: 'Hello world',
};

export default function cityReducer(state: CityState = initialState, action: Action): CityState {
  switch (action.type) {
    // case all cities
    case GET_CITIES:
      console.log(action.payload);
      return { ...state, cities: action.payload, loading: false };
    case CITIES_LOADING:
      return { ...state, loading: true };
    // case MYtinerary page with one city only
    case SINGLE_CITY:
      return { ...state, city: action.payload };
    default:
      return state;
  }
}
