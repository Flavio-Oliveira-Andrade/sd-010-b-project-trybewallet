// Coloque aqui suas actions
import getAPICurrency from '../services/currencyAPI';

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

export function currencyFind(currency) {
  return {
    type: CURRENCIES,
    payload: currency,
  };
}

// recebia ajuda do Gabriel Miranda para realizar a segunda chamada de fetch pedido no requisito 8
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

export function totalExpensesExport(totalExpense) {
  return {
    type: TOTAL,
    payload: totalExpense,
  };
}

// export const fetchCurrency = () => (dispatch) => {
//   return getAPICurrency()
//     .then((resolve) => {
//       const resultAPI = resolve;
//       delete resultAPI.USDT
//       // Object.values(resultAPI);
//       console.log(resultAPI);
//       return dispatch(currencyFind(resultAPI));
//     });
// };
export const fetchCurrency = () => async (dispatch) => {
  const resultAPI = await getAPICurrency();
  delete resultAPI.USDT;
  return dispatch(currencyFind(resultAPI));
  // const result = Object.values(resultAPI);
  // return dispatch(currencyFind(result));
};
