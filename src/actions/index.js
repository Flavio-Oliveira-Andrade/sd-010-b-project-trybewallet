import { currenciesFetch, responseWithoutUSDT } from '../services/fetchAPI';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  payload: {
    email,
  },
});

export const requestingCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const addCurrencies = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const getCoinsThunk = () => async (dispatch) => {
  const response = await currenciesFetch();
  const filteredCurrencies = responseWithoutUSDT(response);
  dispatch(addCurrencies(filteredCurrencies));
};
