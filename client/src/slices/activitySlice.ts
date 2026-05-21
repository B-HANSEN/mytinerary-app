import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Activity } from '../types';

interface ActivityState {
  activities: Activity[];
  loading: boolean;
}

export const getActivities = createAsyncThunk('activity/getByItinerary', async (itinId: string) => {
  const res = await axios.get('/api/activities/' + itinId);
  return res.data;
});

const activitySlice = createSlice({
  name: 'activity',
  initialState: { activities: [], loading: false } as ActivityState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state) => { state.loading = true; })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.activities = action.payload;
        state.loading = false;
      });
  },
});

export default activitySlice.reducer;
