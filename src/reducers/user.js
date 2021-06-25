// Esse reducer será responsável por tratar as informações da pessoa usuária
import INITIAL_STATE from './INITIAL_STATE';

const user = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case 'ADD_SUCCESS':
    return {
      ...state,
      email: action.payLoad,
    };
  default:
    return state;
  }
};

export default user;
