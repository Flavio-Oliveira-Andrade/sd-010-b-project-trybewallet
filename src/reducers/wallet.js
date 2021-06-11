// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import INITIAL_STATE from './INITIAL_STATE';

const wallet = (state = INITIAL_STATE, action) => {
  console.log(action);
  return state;
};

export default wallet;
