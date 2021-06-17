// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export function wallet(despesa) {
  return ({
    type: 'USER_LOGIN',
    despesa,
  });
}

export const newExpense = (despesa) => async (dispatch) => {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await data.json();

  dispatch(wallet({
    ...despesa,
    exchangeRates: result,
  }));
};
