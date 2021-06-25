export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_COTATION = 'GET_COTATION';

export const login = (value) => ({ type: LOGIN, value });
export const requestAPI = () => ({ type: REQUEST_API });
export const addExpense = (state) => ({ type: ADD_EXPENSE, state });
export const getCotation = (data) => ({ type: GET_COTATION, data });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (json) => dispatch(getCotation(json)),
        ));
  };
}
