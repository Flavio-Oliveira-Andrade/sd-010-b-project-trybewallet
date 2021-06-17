// Coloque aqui suas actions
// Os requisitos  2 e 3 pedem que apenas o email validado esteja no estado global, então minha primeira action só foco no email.
export const PROPER_EMAIL = 'PROPER_EMAIL'; // IMPORTANTE: É uma boa prática criar uma constante pra armazenar o que será colocado no type. Aí exporto as duas. Essa daqui eu irei importar no REDUCER( nesse caso será o user.js do reducers)
export const TODAS_MOEDAS = 'TODAS_MOEDAS'; // Mesma ideia.
export const ADICIONA_GASTOS = 'ADICIONA_GASTOS';

// IMPORTANTE: já essa de baixo, eu irei exportar no COMPONENTE(nesse caso, o login.js dentro de pages).
export const action = (email) => ({
  type: PROPER_EMAIL,
  payload: {
    email, // esse aqui tem que ser igual o que tá escrito no parâmetro
  },
});
const moedaAction = (moeda) => ({
  type: TODAS_MOEDAS,
  payload: {
    moeda, //  TEM QUE SER IGUAL AO DO REDUCER( action.payload.moeda). Perdi horas por causa desse erro, tinha colocado nomes diferentes.
  },
}); // Pro requisito 7 preciso fazer essa nova action. Exporto essa no componente.
export const addGastos = (gasto) => ({
  type: ADICIONA_GASTOS,
  gasto,
});

export function fetchApiMoeda() { // é essa que vou importar no formWallet(pra usar no mapDispatchToProps)
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all').then((response) => response.json()).then((moeda) => {
      delete moeda.USDT; // assim faço pra deletar essa moeda(req 7 pediu).

      dispatch(moedaAction(Object.keys(moeda)));// o object.keys é pra retornar em array.
    }); // OBS: nesse fetch eu coloquei o nome moeda como parâmetro, mas poderia ser qualquer outro nome. Não botei moeda por ter que ser igual ao que tá na action. Não precisa ser igual.
  };
}
// essa daqui é pra pegar todas, incluindo o USDT
export function fetchAllcoins() {
  return () => fetch('https://economia.awesomeapi.com.br/json/all').then((response) => response.json()).then((expenses) => expenses);
}
