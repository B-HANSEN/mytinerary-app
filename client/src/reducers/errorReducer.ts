import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

interface ErrorState {
  msg: Record<string, unknown>;
  status: number | null;
  id: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Action = { type: string; payload?: any };

const initialState: ErrorState = {
  msg: {},
  status: null,
  id: null,
};

export default function errorReducer(
  state: ErrorState = initialState,
  action: Action
): ErrorState {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    // to avoid old errors in state:
    case CLEAR_ERRORS:
      return { msg: {}, status: null, id: null };
    default:
      return state;
  }
}
