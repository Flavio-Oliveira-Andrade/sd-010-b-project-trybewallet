// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EDIT_INPUT_STATE } from '../actions';

const initialState = {
  editionKey: {},
};

const editionReducer = (state = initialState, action) => {
  switch (action.type) {
  case EDIT_INPUT_STATE:
    return {
      ...state,
      editionKey: action.payload.row,
    };
  default:
    return state;
  }
};

export default editionReducer;
