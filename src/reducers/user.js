// Esse reducer será responsável por tratar as informações da pessoa usuária
// No requisito 3 eu tive uma certa dificuldade, pois na hora de criar o stado global como o REDME pedia não passava o requisito, conforme você pode notar no trecho de código comentado. Depois de várias tentativas eu tive que buscar ajuda, foi quando eu vi no código do Leandro Reis a sintaxe, supostamente correta. Contudo eu ainda acredito que o meu raciocínio anterior estava correto, já que a aplicação estva funcionando corretamente. Link: https://github.com/tryber/sd-010-b-project-trybewallet/pull/37/commits/3eda43d410e1bf5b83d7416594f24c2a5ab89762
import { VALID_EMAIL } from '../actions/index';

// const INITIAL_STATE = {
//   user: {
//     email: '',
//   },
//   wallet: {
//     currencies: [],
//     expenses: [],
//   },
// };
const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case VALID_EMAIL:
    return {
      ...state, email: action.email,
    //   user: { email: action.email },
    };
  default:
    return state;
  }
}

export default user;
