import { GET_COMMENTS, COMMENTS_LOADING, ADD_COMMENT } from '../actions/types';
import type { Comment } from '../types';

interface CommentState {
  comments: Comment[];
  comment: Partial<Comment>;
  loading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Action = { type: string; payload?: any };

const initialState: CommentState = {
  comments: [],
  comment: {},
  loading: false,
};

export default function comReducer(
  state: CommentState = initialState,
  action: Action
): CommentState {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload, loading: false };
    // to add item, send new comment and all old ones
    case ADD_COMMENT:
      return { ...state, comments: [action.payload, ...state.comments] };
    case COMMENTS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
