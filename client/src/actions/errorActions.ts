import { GET_ERRORS, CLEAR_ERRORS } from './types';

// RETURN ERRORS
export const returnErrors = (msg: unknown, status: number, id: string | null = null) => ({
  type: GET_ERRORS,
  payload: { msg, status, id },
});

// CLEAR ERRORS
export const clearErrors = () => ({ type: CLEAR_ERRORS });
