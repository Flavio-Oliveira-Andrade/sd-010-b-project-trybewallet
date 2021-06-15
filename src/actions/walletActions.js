import { EXPENSES_CHANGE, COIN_CHANGE, ACTUAL_VALUE } from './index';
import fetchCoinsApi from '../apiRequest';

function expenses(stateActual) {
  return { type: EXPENSES_CHANGE,
    payload: stateActual };
}

function currencies(coin) {
  return { type: COIN_CHANGE,
    payload: coin };
}
function actualValue(coin) {
  return { type: ACTUAL_VALUE,
    payload: coin };
}

export const actionThunkCoin = () => async (dispatch) => {
  const result = await fetchCoinsApi();
  delete result.USDT;
  const values = Object.keys(result);
  return dispatch(currencies(values));
};

export const actionThunkExpenses = () => async (dispatch) => {
  const result = await fetchCoinsApi();
  delete result.USDT;
  return dispatch(actualValue(result));
};

export { expenses, currencies, actualValue };
