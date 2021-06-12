// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USUARIO = {
    user: {
      email: 'teste',
    },
};

function reducerUsuario(state = INITIAL_USUARIO, action) {
  switch (action.type) {
  case 'EMAIL':
    return { ...state, user:{ email: action.value }};

  default:
    return state;
  }
}

export default reducerUsuario;
