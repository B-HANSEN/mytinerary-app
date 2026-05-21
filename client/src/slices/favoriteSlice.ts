import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Itinerary } from '../types';
import { loadUser } from './authSlice';
import { getItineraries } from './itinerarySlice';

interface FavoriteState {
  favorites: Itinerary[];
  loading: boolean;
}

export const getFavorites = createAsyncThunk('favorite/getByUser', async (userId: string) => {
  const res = await axios.get('/api/favorites/users/' + userId);
  return res.data;
});

export const likeItinerary = createAsyncThunk(
  'favorite/like',
  async ({ itinId, userId, cityId }: { itinId: string; userId: string; cityId: string }, { dispatch }) => {
    await axios.put('/api/favorites/users/' + userId, { itinId });
    await axios.put('/api/itineraries/' + itinId + '/rating', { amount: 1 });
    dispatch(loadUser());
    dispatch(getItineraries(cityId));
  }
);

export const unlikeItinerary = createAsyncThunk(
  'favorite/unlike',
  async ({ itinId, userId, cityId }: { itinId: string; userId: string; cityId: string }, { dispatch }) => {
    await axios.delete('/api/favorites/users/' + userId + '/' + itinId);
    await axios.put('/api/itineraries/' + itinId + '/rating', { amount: -1 });
    dispatch(loadUser());
    dispatch(getItineraries(cityId));
    return itinId;
  }
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: { favorites: [], loading: false } as FavoriteState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.pending, (state) => { state.loading = true; })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.loading = false;
      })
      .addCase(likeItinerary.pending, (state) => { state.loading = true; })
      .addCase(likeItinerary.fulfilled, (state) => { state.loading = false; })
      .addCase(unlikeItinerary.pending, (state) => { state.loading = true; })
      .addCase(unlikeItinerary.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter((fav) => fav._id !== action.payload);
        state.loading = false;
      });
  },
});

export default favoriteSlice.reducer;
