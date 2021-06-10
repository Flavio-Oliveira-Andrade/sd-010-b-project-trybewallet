import getCurrency from '../services/api/currencyApi';

export const STORE_EMAIL = 'STORE_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_EXCHANGE_START = 'GET_EXCHANGE_START';
export const GET_EXCHANGE_FAIL = 'GET_EXCHANGE_FAIL';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const appLogin = (email) => ({
  type: STORE_EMAIL,
  payload: {
    email,
  },
});
let currentId = 0;

// Api Logic
const getExchangeStart = () => ({
  type: GET_EXCHANGE_START,
});

const getExchangefail = (error) => ({
  type: GET_EXCHANGE_FAIL,
  payload: error,
});

const addExpense = ({ value, description, currency, method, tag }, exchanges) => {
  const payloadObj = {
    type: ADD_EXPENSE,
    payload: {
      id: currentId,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: exchanges,
    },
  };

  currentId += 1;

  return payloadObj;
};

export const fetchExpense = (state) => async (dispatch) => {
  dispatch(getExchangeStart());
  try {
    const parsedExchanges = await getCurrency();
    dispatch(addExpense(state, parsedExchanges));
  } catch (error) {
    dispatch(getExchangefail(error));
  }
};

// Delete
export const delExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});
