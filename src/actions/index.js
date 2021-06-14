// Coloque aqui suas actions
export const addUser = (email) => ({
  type: 'addUser',
  payload: {
    email,
  },
});

export const receiveCurrencies = (currencies) => ({
  type: 'receiveCurrencies',
  payload: {
    currencies,
  },
});

// https://blog.coderockr.com/posts/2016/requisicoes-assincronas-em-redux/
export function fetchApiCoin() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencie) => {
        delete currencie.USDT;
        dispatch(receiveCurrencies(currencie));
      });
  };
}
