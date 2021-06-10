// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const GET_COINS = 'GET_COINS';

export const addEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requestAPI = () => ({ type: REQUEST_API });

export const getCoins = (currencies) => ({
  type: GET_COINS,
  currencies,
});

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(getCoins(data));
    } catch (error) {
      console.log(error);
    }
  };
}
