import SUBMIT_EMAIL from './userActions';
import NEW_EXPENSE from './walletActions';

export async function sucessNewExpense(payload) {
  return ({
    type: NEW_EXPENSE,
    payload,
  });
}

export const newExpense = (payload) => async (dispatch) => {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await data.json();

  dispatch(sucessNewExpense({ ...payload, exchangeRates: result }));
};

export function submitEmail(email) {
  return {
    type: SUBMIT_EMAIL,
    payload: {
      email,
    },
  };
}
