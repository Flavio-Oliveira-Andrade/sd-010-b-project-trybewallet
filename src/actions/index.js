import fetchAPI from '../services/fetchAPI';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const loginSubmit = (email) => ({ type: LOGIN_SUBMIT, email });

export const WALLET_CHANGE = 'WALLET_CHANGE';
export const walletChange = () => ({ type: WALLET_CHANGE });

export const EXPENSE_SUBMIT = 'EXPENSE_SUBMIT';
export const expenseSubmit = (expense) => ({
  type: EXPENSE_SUBMIT,
  expense,
});

export const CURRENT_EXCHANGE = 'CURRENT_EXCHANGE';
export const getCurrentExchange = (exchange) => ({
  type: CURRENT_EXCHANGE,
  exchange,
});

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  expense,
});

export const CONFIRM_EDIT = 'CONFIRM_EDIT';
export const confirmEdit = (id, expense) => ({
  type: CONFIRM_EDIT,
  id,
  expense,
});

export const thunker = () => async (dispatch) => {
  try {
    const coins = await fetchAPI();
    dispatch(getCurrentExchange(coins));
    return coins;
  } catch (error) {
    console.log(error);
  }
};
