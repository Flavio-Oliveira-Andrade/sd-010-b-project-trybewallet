// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialstate = {
  currencies: [],
  expenses: [],
};
const walletReducer = (state = initialstate, action) => {
  switch (action.type) {
  case '':
    return {};
  default:
    return state;
  }
};
export default walletReducer;
