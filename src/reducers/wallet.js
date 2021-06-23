// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  moedas: [],
  despesas: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'RECEBER_MOEDAS':
    return {
      ...state,
      moedas: Object.keys(action.moedas),
    };
  case 'ADICIONAR_DESPESAS':
    return {
      ...state,
      despesas: [...state.despesas, action.despesas],
    };
  default:
    return state;
  }
}

export default wallet;
