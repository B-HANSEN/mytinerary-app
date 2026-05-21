import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { User } from '../types';
import type { RootState } from '../store';
import { setError } from './errorSlice';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: User | null;
}

const clearAuth = (state: AuthState) => {
  localStorage.removeItem('token');
  state.token = null;
  state.user = null;
  state.isAuthenticated = false;
  state.isLoading = false;
};

const jsonHeaders = { headers: { 'Content-Type': 'application/json' } };

export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (_, { dispatch, getState, rejectWithValue }) => {
    const token = (getState() as RootState).auth.token;
    try {
      const res = await axios.get('/api/auth/user', {
        headers: { 'Content-Type': 'application/json', ...(token ? { 'x-auth-token': token } : {}) },
      });
      return res.data;
    } catch (err: any) {
      dispatch(setError({ msg: err.response.data, status: err.response.status, id: null }));
      return rejectWithValue(null);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (user: FormData, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post('/api/users', user, jsonHeaders);
      return res.data;
    } catch (err: any) {
      dispatch(setError({ msg: err.response.data, status: err.response.status, id: 'REGISTER_FAIL' }));
      return rejectWithValue(null);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth', JSON.stringify({ email, password }), jsonHeaders);
      return res.data;
    } catch (err: any) {
      dispatch(setError({ msg: err.response.data, status: err.response.status, id: 'LOGIN_FAIL' }));
      return rejectWithValue(null);
    }
  }
);

export const loginSocial = createAsyncThunk(
  'auth/loginSocial',
  async (
    { email, name, picture }: { email: string; name: string; picture: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await axios.post('/api/users/social', JSON.stringify({ email, name, picture }), jsonHeaders);
      return res.data;
    } catch (err: any) {
      dispatch(setError({ msg: err.response.data, status: err.response.status, id: 'LOGIN_FAIL' }));
      return rejectWithValue(null);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  } as AuthState,
  reducers: {
    logout: clearAuth,
    logoutSocial: clearAuth,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => { state.isLoading = true; })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, clearAuth)
      .addCase(register.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        return { ...state, ...action.payload, isAuthenticated: true, isLoading: false };
      })
      .addCase(register.rejected, clearAuth)
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        return { ...state, ...action.payload, isAuthenticated: true, isLoading: false };
      })
      .addCase(login.rejected, clearAuth)
      .addCase(loginSocial.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        return { ...state, ...action.payload, isAuthenticated: true, isLoading: false };
      })
      .addCase(loginSocial.rejected, clearAuth);
  },
});

export const { logout, logoutSocial } = authSlice.actions;
export default authSlice.reducer;
