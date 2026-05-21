import { createSlice } from '@reduxjs/toolkit';

interface ErrorState {
  msg: Record<string, unknown>;
  status: number | null;
  id: string | null;
}

const errorSlice = createSlice({
  name: 'error',
  initialState: { msg: {}, status: null, id: null } as ErrorState,
  reducers: {
    setError: (state, action) => {
      state.msg = action.payload.msg;
      state.status = action.payload.status;
      state.id = action.payload.id ?? null;
    },
    clearErrors: (state) => {
      state.msg = {};
      state.status = null;
      state.id = null;
    },
  },
});

export const { setError, clearErrors } = errorSlice.actions;
export const returnErrors = (msg: unknown, status: number, id: string | null = null) =>
  setError({ msg, status, id });
export default errorSlice.reducer;
