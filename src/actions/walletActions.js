import { SAVE_EXPENSES, SAVE_CURRENCIES, SAVE_ONLY_EXPENSES } from '.';

export function saveExpenses(expenses) {
  return {
    type: SAVE_EXPENSES,
    expenses,
  };
}

export function saveOnlyExpenses(expenses) {
  return {
    type: SAVE_ONLY_EXPENSES,
    expenses,
  };
}

export function saveCurrencies(currencies) {
  return {
    type: SAVE_CURRENCIES,
    currencies,
  };
}

export function fetchAPI() {
  return async (dispatch) => {
    const currenciesJSON = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await currenciesJSON.json();
    delete currencies.USDT;
    // console.log(currencies);
    return dispatch(saveCurrencies(currencies));
  };
}
