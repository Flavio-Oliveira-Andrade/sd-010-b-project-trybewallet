// Coloque aqui suas actions
export const verifyLogin = (user) => ({
  type: 'VERIFY_LOGIN',
  payload: {
    user,
  },
});
const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
/* const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES'; */
const GET_CURRENCIES = 'GET_CURRENCIES';

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

/* const receiveCurrencies = (currencies) => {
  console.log('dentro de receive Currencies:');
  console.log(currencies);
  return ({
    type: RECEIVE_CURRENCIES,
    currencies,
  });
}; */

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: {
    currencies,
  },
});

export const fetchCurrencies = () => {
  console.log('estou dentro de fetchCurrencies');
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(getCurrencies(currencies)));
  };
};
// dispatch(receiveCurrencies(currencies)));
