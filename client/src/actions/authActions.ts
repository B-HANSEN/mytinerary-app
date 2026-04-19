import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SINGLE_USER,
} from './types';
import type { AppDispatch, RootState } from '../store';

interface RequestConfig {
  headers: {
    'Content-Type': string;
    'x-auth-token'?: string;
  };
}

// Headers
const config: RequestConfig = { headers: { 'Content-Type': 'application/json' } };

// ******************** Load User ******************** //
export const loadUser = () => (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

// ******************** Register User ******************** //
export const register = (user: FormData) => (dispatch: AppDispatch) => {
  axios
    .post('/api/users', user, config)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
      dispatch({ type: REGISTER_FAIL });
    });
};

// ******************** Login User ******************** //
export const login =
  ({ email, password }: { email: string; password: string }) =>
  (dispatch: AppDispatch) => {
    const body = JSON.stringify({ email, password });
    axios
      .post('/api/auth', body, config)
      .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({ type: LOGIN_FAIL });
      });
  };

// ******************** Logout User ******************** //
export const logout = () => ({ type: LOGOUT_SUCCESS });

// **************************************** Setup config/headers and token **************************************** //
export const tokenConfig = (getState: () => RootState): RequestConfig => {
  const token = getState().auth.token;
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};

// ******************** Social Media Login ******************** //
export const loginSocial =
  ({ email, name, picture }: { email: string; name: string; picture: string }) =>
  (dispatch: AppDispatch) => {
    const body = JSON.stringify({ email, name, picture });
    axios
      .post('/api/users/social', body, config)
      .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({ type: LOGIN_FAIL });
      });
  };

// ******************** Social Media Logout ******************** //
export const logoutSocial = () => ({ type: LOGOUT_SUCCESS });

// ******************** LOAD SINGLE USER ******************** //
export const getUserById = (userId: string) => (dispatch: AppDispatch) => {
  dispatch(setUserLoading());
  axios.get('/api/users/' + userId).then((res) =>
    dispatch({ type: SINGLE_USER, payload: res.data })
  );
};

// change loading state
export const setUserLoading = () => ({ type: USER_LOADING });
