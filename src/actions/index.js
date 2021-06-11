export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_API = 'FETCH_API';
export const FETCH_CURRENCY = 'FETCH_CURRENCY';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

export const fetchAPI = () => ({ type: FETCH_API });
export const fetchCurrency = (data) => ({ type: FETCH_CURRENCY, data });

export function currencyAPI() {
  return (dispatch) => {
    dispatch(fetchAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((data) => dispatch(fetchCurrency(data))));
  };
}
