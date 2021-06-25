const logginSucess = (email) => ({
  type: 'loggin_sucess',
  email,
});
const addExpenses = (expenses) => ({
  type: 'ADD_EXPENSES',
  expenses,
});
const loadExchange = (exchangeRates, data) => ({
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
export const exchangeRates = (data) => async (dispatch) => {
  const baseUrl = 'https://economia.awesomeapi.com.br/json/all';
  const endPoint = await fetch(baseUrl);
  const resolve = await endPoint.json();
  dispatch(loadExchange(resolve, data));
};
const storeLog = (email) => (dispatch) => {
  dispatch(logginSucess(email));
};
export const storeExpenses = (expenses) => (dispatch) => {
  dispatch(addExpenses(expenses));
};
export default storeLog;
