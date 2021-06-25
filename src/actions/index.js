// Coloque aqui suas actions
const addEmail = (payLoad) => ({
  type: 'ADD_SUCCESS',
  payLoad,
});

export const loadSuccess = (exchangeRates, data) => ({
  type: 'LOAD_DATA_SUCCESS',
  payLoad: {
    exchangeRates,
    ...data,
  },
});

export const removeItem = (payLoad) => ({
  type: 'REMOVE_SUCCESS',
  payLoad,
});

export const loadDataSuccess = (data) => async (dispatch) => {
  const api = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resolve = await api.json();
  dispatch(loadSuccess(resolve, data));
};

export default addEmail;
