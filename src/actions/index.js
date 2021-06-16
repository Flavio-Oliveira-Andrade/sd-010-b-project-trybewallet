// Coloque aqui suas actions
export const VALID_EMAIL = 'get-email';
export const ACTION_WALLET_CURRENCIES = 'ACTION_WALLET_CURRENCIES';
// export const ACTION_WALLET_EXPENSES = 'ACTION_WALLET_EXPENSES';
export const ACTION_WALLET_STATE_EXPENSES = 'ACTION_WALLET_STATE_EXPENSES';

export const actionEmail = (email) => ({
  type: VALID_EMAIL,
  email,
});

const actionCurrencies = (currencies) => ({
  type: ACTION_WALLET_CURRENCIES,
  currencies,
});

// const actionAddExpenses = (expense) => ({
//   type: ACTION_WALLET_EXPENSES,
//   expense,
// });

export const actionAddStateExpenses = (state) => ({
  type: ACTION_WALLET_STATE_EXPENSES,
  payload: state,
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json())
    .then((currencies) => {
      // const currenciesAll = currencies;
      // console.log(currenciesAll)
      const currenciesWithout = Object.keys(currencies).filter((c) => c !== 'USDT');
      // console.log(currenciesWithout);
      return currenciesWithout;
    })
    .then((currencies) => dispatch(actionCurrencies(currencies)));
}

// export function fetchAPIExpenses() {
//   return () => fetch('https://economia.awesomeapi.com.br/json/all')
//     .then((r) => r.json())
//     .then((currencies) => {
//       const currenciesAll = Object.keys(currencies);
//       const objeto = {};
//       for (let i = 0; i < currenciesAll.length; i += 1) {
//         if (currenciesAll[i] !== 'USDT') {
//           objeto[currenciesAll[i]] = currencies[currenciesAll[i]];
//           // objeto += currencies[currenciesAll[i]];
//         }
//       }
//       // console.log(objeto);
//       return objeto;
//     });
// }

export function fetchAPIExpenses() {
  return () => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json())
    .then((currencies) => {
      const currenciesAll = currencies;
      // console.log(objeto);
      return currenciesAll;
    });
// .then((currencies) => dispatch(actionAddExpenses(currencies)));
}

// export function fetchAPIExpenses() {
//   return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
//     .then((r) => r.json())
//     .then((currencies) => {
//       const currenciesAll = Object.keys(currencies);
//       const objeto = {};
//       for (let i = 0; i < currenciesAll.length; i += 1) {
//         if (currenciesAll[i] !== 'USDT') {
//           objeto[currenciesAll[i]] = Object.values(currencies[currenciesAll[i]]);
//           // objeto += currencies[currenciesAll[i]];
//         }
//       }
//       console.log(objeto);
//       return objeto;
//     })
//     .then((currencies) => dispatch(actionAddExpenses(currencies)));
// }
