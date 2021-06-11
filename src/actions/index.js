// Coloque aqui suas actions
import getAPICurrency from '../services/currencyAPI';

export const USERLOGIN = 'user_Login';
export const CURRENCIES = 'currencies';
export const EXPENSES = 'expenses';

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

export function expensesExport(expense) {
  return {
    type: EXPENSES,
    payload: expense,
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
