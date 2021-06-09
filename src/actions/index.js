export const actionLogin = (email) => (
  { type: 'LOGIN',
    email });

export const wallet = (currences, expenses) => (
  { type: 'WALLET',
    currences,
    expenses,

  });

  export const requestSuccess = (data) => ({
    type: "REQUEST_SUCCESS",
    payload: Object.keys(data)
  }
)
  const getApi = () => (dispatch) =>{
    fetch('https://economia.awesomeapi.com.br/json/all')
    .then(response => response.json())
    .then(data => dispatch(requestSuccess(data))
    .catch((erro) => )
  }