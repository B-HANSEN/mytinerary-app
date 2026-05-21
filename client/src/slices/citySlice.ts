import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { City } from '../types';

interface CityState {
  cities: City[];
  city: Partial<City>;
  loading: boolean;
}

export const getCities = createAsyncThunk('city/getAll', async () => {
  const res = await axios.get('/api/cities');
  return res.data;
});

export const getCityById = createAsyncThunk('city/getById', async (id: string) => {
  const res = await axios.get('/api/cities/' + id);
  return res.data;
});

const citySlice = createSlice({
  name: 'city',
  initialState: { cities: [], city: {}, loading: false } as CityState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.loading = false;
      })
      .addCase(getCityById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCityById.fulfilled, (state, action) => {
        state.city = action.payload;
        state.loading = false;
      });
  },
});

export default citySlice.reducer;
