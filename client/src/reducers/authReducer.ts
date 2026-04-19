import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';
import type { User } from '../types';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: User | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Action = { type: string; payload?: any };

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function authReducer(state: AuthState = initialState, action: Action): AuthState {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        // include entire payload: containing user and token
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      // at first, clear out storage from any token
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
