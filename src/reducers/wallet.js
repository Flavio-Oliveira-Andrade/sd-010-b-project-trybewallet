// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  // case 'SWITCH':
  //   return {
  //     ...state,
  //     valor: 'valor',
  //   };
  default:
    return state;
  }
};

export default wallet;
