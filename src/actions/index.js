// Coloque aqui suas actions
import {
  ADD_EMAIL,
  FETCH_TRUE,
} from './types';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email,
  },
});

export const isFetching = () => ({
  type: FETCH_TRUE,
  payload: true,
});
