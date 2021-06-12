// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_MOEDA = 'ADD_MOEDA';
export const ERROR_FETCH = 'ERROR_FETCH';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const loginAction = (value) => ({ type: 'LOGIN', value });

export const fetchOk = (payload) => ({
  type: ADD_MOEDA,
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

/* export const fetchApi2 = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((res) => dispatch(fetchExpenses(res)));
};
 */
