// Coloque aqui suasexport const const [state, dispatch] = useReducer(reducer, initialState, init) = (params) => {
export const EMAIL = 'EMAIL';

export const emailChange = (payload) => ({
  type: EMAIL,
  payload,
});
