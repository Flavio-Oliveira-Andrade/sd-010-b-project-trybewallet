import { WALLET } from '.';

const expenseOnChange = () => ({
  type: WALLET,
  payload: {
    wallet: {
      currencies: [],
      expenses: [],
    },
  },
});

export default expenseOnChange;
