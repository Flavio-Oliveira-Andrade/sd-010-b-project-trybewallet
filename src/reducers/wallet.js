// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUISITION_API } from '../actions/index';

const INNITIAL_STATE = {
  currencies: [],
};

const reducerWallet = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case REQUISITION_API:
    return { ...state, currencies: action.api };
  default:
    return state;
  }
};

export default reducerWallet;
