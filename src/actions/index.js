export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const RECEIVE_COINS = 'RECEIVE_COINS';

export const saveUserInfo = (email) => ({
  type: SAVE_USER_INFO,
  payload: {
    email,
  },
});

const receiveCoins = (coin) => ({
  type: RECEIVE_COINS,
  payload: {
    coin,
  },
});

export function fetchCoin() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((coin) => {
        delete coin.USDT;
        dispatch(receiveCoins(Object.keys(coin)));
      });
  };
}
