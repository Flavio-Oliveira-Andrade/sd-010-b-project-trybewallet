// Coloque aqui suas actions
const addEmail = (payLoad) => ({
  type: 'ADD_EXPENSES',
  payLoad,
});

export const loadSuccess = (exchangeRates, data) => ({
  type: 'REQUEST_EXCHANGE',
  payLoad: {
    exchangeRates,
    ...data,
  },
});

export const removeExpense = (payLoad) => ({
  type: 'REMOVE',
  payLoad,
});

export const loadDataSuccess = (data) => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resolve = await api.json();
  dispatch(loadSuccess(resolve, data));
};

export default addEmail;
