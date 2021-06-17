export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_API = 'FETCH_API';
export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (expense, coins) => ({
  type: ADD_EXPENSE,
  expense: {
    ...expense,
    exchangeRates: coins,
  },
});

export function fetchCotation(expense) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(addExpense(expense, data));
    } catch (error) {
      console.log(error);
    }
  };
}

export const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

export const fetchAPI = () => ({ type: FETCH_API });
export const fetchCurrency = (data) => ({ type: FETCH_CURRENCY, data });

export function currencyAPI() {
  return (dispatch) => {
    dispatch(fetchAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((data) => dispatch(fetchCurrency(data))));
  };
}
