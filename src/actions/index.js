// Coloque aqui suas actions
export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  payload: {
    email,
  },
});

export const saveExpense = (expense) => ({
  type: 'SAVE_EXPENSE',
  payload: {
    expense,
  },
});

// export function dispachExpense(api) {
//   return (dispatch) => { // thunk declarado
//     dispatch(requestMovies());
//     return fetch(api)
//       .then((response) => response.json())
//       .then((response) => dispatch(saveExpense(response)));
//   };
// }
