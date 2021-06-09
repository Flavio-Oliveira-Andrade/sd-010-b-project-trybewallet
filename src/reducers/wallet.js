const initialState = {
  expenses: [],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case 'WALLET':
    return ({
      ...state,
      expenses: action.value,
    });
  default:
    return state;
  }
}

export default walletReducer;
