export const CREATE_EXCHANGE = 'CREATE_EXCHANGE';
export const SAVE_PRICE = 'SAVE_PRICE';
export const CALCULATE_TOTAL_EXPENSE = 'CALCULATE_TOTAL_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const createExchange = (payload) => ({
  type: CREATE_EXCHANGE,
  payload,
});

export const savePrice = (payload) => ({
  type: SAVE_PRICE,
  payload,
});

export const calculateTotalExpense = (payload) => ({
  type: CALCULATE_TOTAL_EXPENSE,
  payload,
});

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});
