export const SAVE_DATA = 'SAVE_DATA';
export const SAVE_PRICE = 'SAVE_PRICE';
export const CALCULATE_TOTAL_EXPENSE = 'CALCULATE_TOTAL_EXPENSE';

export const saveData = (payload) => ({
  type: SAVE_DATA,
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
