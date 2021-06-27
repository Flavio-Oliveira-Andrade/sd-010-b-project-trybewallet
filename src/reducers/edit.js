// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EDIT_INPUT_STATE, EDIT_STATUS } from '../actions';

const initialState = {
  editionKey: {},
  status: false,
};

const editionReducer = (state = initialState, action) => {
  switch (action.type) {
  case EDIT_INPUT_STATE:
    return {
      ...state,
      editionKey: action.payload.row,
      status: action.payload.status,
    };

  case EDIT_STATUS:
    return {
      ...state,
      status: action.status,
    };
  default:
    return state;
  }
};

export default editionReducer;
