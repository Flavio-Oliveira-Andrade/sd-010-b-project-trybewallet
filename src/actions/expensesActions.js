import {
  EDIT_EXPENSE,
  ADD_EXPENSE,
  EDIT_INPUT_STATE,
  EDIT_STATUS,
  REMOVE_EXPENSE } from './index';

export const addExpenseAction = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    expense,
  },
});

export const removeExpenseAction = (expense) => ({
  type: REMOVE_EXPENSE,
  payload: {
    expense,
  },
});

export const editStateAction = (row) => ({
  type: EDIT_INPUT_STATE,
  payload: {
    row,
    status: true,
  },
});

export const editAction = (row) => ({
  type: EDIT_EXPENSE,
  payload: {
    row,
  },
});

export const editStateStatusOff = (status) => ({
  type: EDIT_STATUS,
  status,
});
