import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Comment } from '../types';

interface CommentState {
  comments: Comment[];
  loading: boolean;
}

export const getComments = createAsyncThunk('comment/getByItinerary', async (itinId: string) => {
  const res = await axios.get('/api/comments/' + itinId);
  return res.data;
});

export const addComment = createAsyncThunk(
  'comment/add',
  async (payload: { itinId: string; text: string; user: { username: string; profilePic: string } }) => {
    const res = await axios.post('/api/comments', payload);
    return res.data;
  }
);

const commentSlice = createSlice({
  name: 'comment',
  initialState: { comments: [], loading: false } as CommentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => { state.loading = true; })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments = [action.payload, ...state.comments];
      });
  },
});

export default commentSlice.reducer;
