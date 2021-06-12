// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USUARIO = {
  email: 'state inicial eser email apagar depois',
};

function reducerUsuario(state = INITIAL_USUARIO, action) {
  switch (action.type) {
  case 'EMAIL':
    return { ...state, email: action.value };

  default:
    return state;
  }
}

export default reducerUsuario;
