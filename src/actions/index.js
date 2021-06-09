// Coloque aqui suas actions
// Os requisitos  2 e 3 pedem que apenas o email validado esteja no estado global, então só usamos uma action que é a do email. Não pensa muito em action pra outra coisa.
export const PROPER_EMAIL = 'PROPER_EMAIL'; // IMPORTANTE: É uma boa prática criar uma constante pra armazenar o que será colocado no type. Aí exporto as duas. Essa daqui eu irei importar no REDUCER( nesse caso será o user.js do reducers)

// IMPORTANTE: já essa de baixo, eu irei exportar no COMPONENTE(nesse caso, o login.js dentro de pages).
export const action = (email) => ({
  type: PROPER_EMAIL,
  payload: {
    email, // esse aqui tem que ser igual o que tá escrito no parâmetro
  },
});
