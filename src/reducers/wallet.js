// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
};

const getArrayCurrencies = (action) => {
  let currenciesArray = [];
  currenciesArray = Object.entries(action.payload.currencies);
  return currenciesArray.filter((currency) => (currency[0] !== 'USDT'));
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return { ...state, currencies: getArrayCurrencies(action) };
  default:
    return state;
  }
};

export default walletReducer;
