export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const actionCurrency = (obj) => ({
  type: REQUEST_CURRENCY,
  currency: obj,
});

const actionRequest = () => async (dispatch) => {
  const obj = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resolve) => resolve.json()).then((result) => Object.values(result));
  obj.splice(1, 1);
  dispatch(actionCurrency(obj));
};

export default actionRequest;
