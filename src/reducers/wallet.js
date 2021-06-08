import {
  FETCH_CURRENCY,
  DELETE_PAY,
  UPDATE_PAY,
  // FETCH_TRUE,
  CURR_DATA,
  AUTHORIZED_UPDATE,
} from '../actions/types';

const initialState = {
  expenses: [],
  currencies: [],
  upDateItemId: 0,
  bool: '',
  // isFetching: false,
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case FETCH_CURRENCY:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload.args, id: state.expenses.length },
      ],
    };

  case CURR_DATA:
    return {
      ...state,
      currencies: Object.keys(action.payload.data),
    };

  case DELETE_PAY:
    return {
      ...state,
      expenses: state.expenses.filter(
        (item) => item.id !== action.payload.id,
      ),
    };

  case UPDATE_PAY:
    return {
      ...state,
      bool: action.payload.bool,
      upDateItemId: action.payload.id,
    };

  case AUTHORIZED_UPDATE:
    return {
      ...state,
      expenses: state.expenses.map((item) => (item.id === state.upDateItemId
        ? {
          ...item,
          ...action.payload.args,
        }
        : item
      )),
      bool: '',
    };
  default:
    return state;
  }
}
