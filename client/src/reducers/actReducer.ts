import { GET_ACTIVITIES, ACTIVITIES_LOADING } from '../actions/types';
import type { Activity } from '../types';

interface ActivityState {
  activities: Activity[];
  activity: Partial<Activity>;
  loading: boolean;
  msg: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Action = { type: string; payload?: any };

const initialState: ActivityState = {
  activities: [],
  activity: {},
  loading: false,
  msg: 'Hello world (activities)',
};

export default function actReducer(
  state: ActivityState = initialState,
  action: Action
): ActivityState {
  switch (action.type) {
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload, loading: false };
    case ACTIVITIES_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
