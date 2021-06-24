import API_URL from '../services/apiURL';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const getCurrencies = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export const apiError = (payload) => ({
  type: REQUEST_ERROR,
  payload,
});

export const getCurrencyThunk = () => async (dispatch) => {
  dispatch(getCurrencies());
  const request = await API_URL();
  delete request.USDT;
  try {
    dispatch(requestApiSuccess(request));
  } catch (error) {
    dispatch(apiError(error));
  }
};
