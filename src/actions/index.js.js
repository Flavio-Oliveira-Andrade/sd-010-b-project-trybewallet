// Coloque aqui suas actions
export const FETCH_MOEDAS = 'FETCH_MOEDAS';
export const EXPENSES = 'EXPENSES';

export const saveEmailLogon = (email) => ({
  type: 'SAVE_EMAIL_LOGON',
  payload: {
    email,
  },
});

export function getMoedas() {
  return function getReturn(dispatch) {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        delete data.USDT;
        dispatch({
          type: FETCH_MOEDAS,
          payload: {
            data,
          },
        });
      });
  };
}

export const saveExpenses = (state) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      delete data.USDT;
      dispatch({
        type: EXPENSES,
        payload: { ...state, exchangeRates: data },

      });
    });
};
