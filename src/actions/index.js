export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';

export const requestAPI = () => ({ type: REQUEST_API });
export const getCurrency = (data) => ({ type: GET_CURRENCY, data });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((data) => dispatch(getCurrency(data))));
  };
}

export const ADD_USER = 'ADD_USER';

const userInput = (email) => ({
  type: ADD_USER,
  email,
});

export default userInput;
