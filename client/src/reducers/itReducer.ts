import { GET_ITINERARIES, ITINERARIES_LOADING } from '../actions/types';
import type { Itinerary } from '../types';

interface ItineraryState {
  itineraries: Itinerary[];
  itinerary: Partial<Itinerary>;
  loading: boolean;
  msg: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Action = { type: string; payload?: any };

const initialState: ItineraryState = {
  itineraries: [],
  itinerary: {},
  loading: false,
  msg: 'Hello world (itineraries)',
};

export default function itReducer(
  state: ItineraryState = initialState,
  action: Action
): ItineraryState {
  switch (action.type) {
    case GET_ITINERARIES:
      return { ...state, itineraries: action.payload, loading: false };
    case ITINERARIES_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
