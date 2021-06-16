// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_COIN = 'ADD_COIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export const fetchOk = (payload) => ({
  type: ADD_COIN,
  payload,
});

export const fetchExpenses = (expenses) => ({
  type: ADD_EXPENSE,
  payload: {
    expenses,
  },
});

export const fetchApi = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((res) => dispatch(fetchOk(res)));
};
