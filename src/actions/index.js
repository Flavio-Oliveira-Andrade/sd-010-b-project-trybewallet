// Coloque aqui suas actions
import fetchCurrencies from '../services/fetchCurrency';

export const userLogin = (state) => ({ type: 'USER_LOGIN', state });

export const newExpense = (state) => ({ type: 'NEW_EXPENSE', state });

export const requestCurrencies = (state) => ({ type: 'REQUEST_CURRENCIES', state });

export const receiveCurrencies = (state) => ({ type: 'RECEIVE_CURRENCIES', state });

export const removeExpense = (state) => ({ type: 'REMOVE_EXPENSE', state });

export function actionFetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetchCurrencies().then(
      (currencies) => dispatch(receiveCurrencies(currencies)),
    );
  };
}
