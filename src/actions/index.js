// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';

export const actionLogin = (payload) => ({
  type: VALID_EMAIL,
  payload,
});

const actionCoin = (payload) => ({
  type: 'COIN',
  payload,
});

export function fetchCoin() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((res) => dispatch(actionCoin(res)));
}

export const actionExpenses = (payload) => ({
  type: 'ADD_ EXPENSE',
  payload,
});
