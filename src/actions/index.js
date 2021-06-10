import getCurrencies from '../services/api';
// LOGIN -------------------------------------------------------------------
export const ADD_LOGIN = 'ADD_LOGIN';

export const addLogin = (email, password) => ({
  type: ADD_LOGIN,
  payload: {
    email,
    password,
  },
});
// -------------------------------------------------------------------------------------------------

// WALLET -------------------------------------------------------------------
export const FETCH_CURRENCIES_LIST = 'FETCH_CURRENCIES_LIST';
export const FETCH_CURRENCIES_LIST_SUCCESS = 'FETCH_CURRENCIES_LIST_SUCCESS';
export const FETCH_CURRENCIES_LIST_ERROR = 'FETCH_CURRENCIES_LIST_ERROR';

export const fetchCurrenciesList = () => ({
  type: FETCH_CURRENCIES_LIST,
});

export const requestCurrenciesListSuccess = (currencies) => ({
  type: FETCH_CURRENCIES_LIST_SUCCESS,
  payload: {
    currencies,
  },
});

export const requestCurrenciesListError = (error) => ({
  type: FETCH_CURRENCIES_LIST_ERROR,
  payload: {
    error,
  },
});

// Fetch Thunk
export const fetchCurrencies = () => (dispatch) => {
  dispatch(fetchCurrenciesList());
  getCurrencies()
    .then((currenciesListSuccess) => dispatch(
      requestCurrenciesListSuccess(currenciesListSuccess),
    ))
    .catch((currenciesListError) => dispatch(
      requestCurrenciesListError(currenciesListError),
    ));
};

// export function fetchCurrencies() {
//   return async (dispatch) => {
//     const currencies = await getCurrencies();
//     return dispatch(requestCurrenciesListSuccess(currencies));
//   };
// }

// -------------------------------------------------------------------------------------------------
