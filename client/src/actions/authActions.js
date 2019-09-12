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
  SINGLE_USER
} from './types';

 // Headers
 const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};



// ******************** Load User ******************** //
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// ******************** Register User ******************** //
export const register = ({ name, email, password }) => dispatch => {
  // Request body
  const body = JSON.stringify({ name, email, password });
  axios
    .post('/api/users', body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        // user and token
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// ******************** Login User ******************** //
export const login = ({ email, password }) => dispatch => {
  // Headers
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // };

  // Request body
  const body = JSON.stringify({ email, password });
  axios
    .post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// ******************** Logout User ******************** //
// no need to dispatch... only send action.type of LOGOUT_SUCCESS to reducer
// that will clear out token and set back the state, no action on server-side
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// **************************************** Setup config/headers and token **************************************** //
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};


// ****************************** Social media login ****************************** //
// ******************** Login User ******************** //
export const loginSocial = ({ email, name }) => dispatch => {
 
  // Request body
  const body = JSON.stringify({ email, name });

  axios
    .post('/api/users/social', body, config)
      .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: LOGIN_FAIL
        });
      });
};

// ******************** Social Media Logout ******************** //
// no need to dispatch... only send action.type of LOGOUT_SUCCESS to reducer
// that will clear out token and set back the state, no action on server-side
export const logoutSocial = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};


// ******************** LOAD SINGLE USER ******************** //
export const getUserById = userId => dispatch => {
  dispatch(setUserLoading());
  axios.get("/api/users/" + userId)
      .then(res =>
        dispatch({
          type: SINGLE_USER,
          payload: res.data
      })
  );
};

// change loading state
export const setUserLoading = () => {
  return {
      type: USER_LOADING
  }
}