// Coloque aqui suas actions
export const VALID_EMAIL = 'get-email';
export const ACTION_WALLET_CURRENCIES = 'ACTION_WALLET_CURRENCIES';

export const actionEmail = (email) => ({
  type: VALID_EMAIL,
  email,
});

const actionCurrencies = (currencies) => ({
  type: ACTION_WALLET_CURRENCIES,
  currencies,
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json())
    .then((currencies) => {
      // const currenciesAll = currencies;
      // console.log(currenciesAll)
      const currenciesWithout = Object.keys(currencies).filter((c) => c !== 'USDT');
      return currenciesWithout;
    })
    .then((currencies) => dispatch(actionCurrencies(currencies)));
}
