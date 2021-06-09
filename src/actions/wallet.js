import { GET_TOTAL } from './index';

export const actionTotal = (total = 0) => ({
  type: GET_TOTAL,
  payload: { expenses: [total] },
});

export const actionName = (payload) => ({
  type: GET_TOTAL,
  payload,
});
