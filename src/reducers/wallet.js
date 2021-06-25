// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, CURRENCY } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  total: 0,
};

export default (state = initialState, { type, payload }) => { // action desconstruction
  switch (type) {
  case CURRENCY:
    return {
      ...state,
      currencies: payload.filtered,
    };
  case ADD_EXPENSE:
    console.log(payload.value);
    return { ...state,
      expenses: [...state.expenses, { // I got this id logic from Fabio's PR: https://github.com/tryber/sd-010-b-project-trybewallet/blob/fabio-marturano-project-trybewallet/src/reducers/wallet.js
        id: state.expenses.length === 0
          ? 0 : state.expenses[state.expenses.length - 1].id + 1,
        ...payload,
      }],
      total: state.total
        + parseFloat(payload.value) * payload.exchangeRates[payload.currency].ask };
  default:
    return state;
  }
};

// soma() {
//   const { expenses } = this.props;
//   const sum = expenses.reduce(
//     (acumulador, valorAtual) => (
//       acumulador + (
//         valorAtual.exchangeRates[valorAtual.currency].ask * valorAtual.value)),
//     0,
//   );
//   return parseFloat(sum).toFixed(2);
// }
