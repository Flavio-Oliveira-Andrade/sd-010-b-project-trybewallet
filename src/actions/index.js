// Coloque aqui suas actions
import getAPICurrency from '../services/data';

export const USERLOGIN = 'user_Login';
export const CURRENCIES = 'currencies';
export const CURRENCYNOW = 'currencynow';
export const EXPENSES = 'expenses';
export const TOTAL = 'totalExpenses';

export default function userLogin(values) {
  return {
    type: USERLOGIN,
    payload: values,
  };
}

export const currencyFind = (currency) => ({
  type: CURRENCIES,
  payload: currency,
});

export const totalExpensesExport = (totalExpense) => ({
  type: TOTAL,
  payload: totalExpense,
});

export const fetchCurrency = () => async (dispatch) => {
  const resultAPI = await getAPICurrency();
  delete resultAPI.USDT;
  return dispatch(currencyFind(resultAPI));
};

export function currencyNow(currency) {
  return async (dispatch) => {
    const resultAPI = await getAPICurrency();
    delete resultAPI.USDT;
    currency.exchangeRates = resultAPI;
    dispatch({
      type: CURRENCYNOW,
      payload: currency,
    });
  };
}
