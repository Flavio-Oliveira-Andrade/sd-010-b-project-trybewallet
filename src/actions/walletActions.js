import { EXPENSES_CHANGE, COIN_CHANGE } from './index';

function expenses(valueOfExpenses) {
  return { type: EXPENSES_CHANGE,
    payload: valueOfExpenses };
}

function currencies(coin) {
  return { type: COIN_CHANGE,
    payload: coin };
}

export { expenses, currencies };
