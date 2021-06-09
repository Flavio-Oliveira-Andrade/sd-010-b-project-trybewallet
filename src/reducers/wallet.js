// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};
// Esse reducer será responsável por tratar as informações da pessoa usuária
export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}
