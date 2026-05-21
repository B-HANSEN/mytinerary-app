import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Itinerary } from '../types';

interface ItineraryState {
  itineraries: Itinerary[];
  loading: boolean;
}

export const getItineraries = createAsyncThunk('itinerary/getByCity', async (cityId: string) => {
  const res = await axios.get('/api/itineraries/' + cityId);
  return res.data;
});

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: { itineraries: [], loading: false } as ItineraryState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItineraries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getItineraries.fulfilled, (state, action) => {
        state.itineraries = action.payload;
        state.loading = false;
      });
  },
});

export default itinerarySlice.reducer;
