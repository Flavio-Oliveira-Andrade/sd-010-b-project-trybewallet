export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_API = 'FETCH_API';
export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export const USER_EXPENSES = 'USER_EXPENSES';
export const GET_CURRENCIES = 'GET_CURRENCIES';

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

export const userExpenses = (expense, currencies) => ({
  type: USER_EXPENSES,
  expenses: {
    ...expense,
    exchangeTaxes: currencies,
  },
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

// feito com auxílio do amigo Felippe Correa.
export function fetchCotation(expense) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(userExpenses(expense, data));
    } catch (error) {
      console.log(error);
    }
  };
}
