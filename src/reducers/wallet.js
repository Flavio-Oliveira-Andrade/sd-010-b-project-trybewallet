import { NEW_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_EXPENSE:
    return ({
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],
    });
  default:
    return state;
  }
};

export default walletReducer;
