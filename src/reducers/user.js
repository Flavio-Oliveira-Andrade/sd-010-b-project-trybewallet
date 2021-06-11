// Esse reducer será responsável por tratar as informações da pessoa usuária
import INITIAL_STATE from './INITIAL_STATE';

const user = (state = INITIAL_STATE, action) => {
  console.log(action);
  return state;
};

export default user;
