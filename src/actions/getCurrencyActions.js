import apiRequest from '../services/apiRequest';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';
export const SAVE_DATA = 'SAVE_DATA';

export const getCurrency = () => ({
  type: REQUEST_API,
});

export const getCurrencySucess = (payload) => ({
  type: REQUEST_API_SUCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: REQUEST_API_ERROR,
  payload,
});

export const getCurrencyThunk = () => async (dispatch) => {
  dispatch(getCurrency());
  const answer = await apiRequest();
  delete answer.USDT;
  // console.log(answer);
  try {
    dispatch(getCurrencySucess(answer));
  } catch (erro) {
    dispatch(getCurrencyError(erro));
  }
};
