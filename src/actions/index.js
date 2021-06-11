// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const GET_COINS = 'GET_COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requestAPI = () => ({ type: REQUEST_API });

export const getCoins = (currencies) => ({
  type: GET_COINS,
  currencies,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export function fetchCotation() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(addExpense(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(getCoins(data));
    } catch (error) {
      console.log(error);
    }
  };
}
