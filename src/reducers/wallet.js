// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUISITION_API,
  REQUISITION_API_SALVA_DESPESAS } from '../actions/index';

const INNITIAL_STATE = {

  currencies: [],
  expenses: [],
  // apiDespesas: {},

};

const reducerWalletApi = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case REQUISITION_API:
    return { ...state, currencies: [action.api] };
  // case REQUISITION_API_DESPESAS:
  //   return { ...state, apiDespesas: [action.despesas] };
  case REQUISITION_API_SALVA_DESPESAS:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default reducerWalletApi;

// export const reducerWalletDespesas = (state = INNITIAL_STATE, action) => {
//   switch (action.type) {
//   case REQUISITION_API_DESPESAS:
//     return { ...state, wallet: { expenses: [action.salvaDespesas] } };
//   default:
//     return state;
//   }
// };
