import { TODAS_MOEDAS, ADICIONA_GASTOS } from '../actions/index';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialstate = { // aqui é o estado global(pra parte do wallet).
  currencies: [],
  expenses: [],
};
const walletReducer = (state = initialstate, action) => {
  switch (action.type) {
  case TODAS_MOEDAS:
    return {
      ...state, currencies: action.payload.moeda, // req 7 pede sobre moedas, e não sobre gastos(ainda). Por isso vou usar o currencies. LEMBRANDO: o nome moeda foi o que botei no estado global.
    };
  case ADICIONA_GASTOS:
    return {
      ...state, expenses: [...state.expenses, action.gasto],
    };
  default:
    return state;
  }
};
export default walletReducer;
