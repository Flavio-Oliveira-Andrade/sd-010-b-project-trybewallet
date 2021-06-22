// Os requisitos 2 e 3 eu precisei da enorme ajuda do meu colega Alexandre Damasceno. Link do PR dele: https://github.com/tryber/sd-010-b-project-trybewallet/pull/45/commits

import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { action } from '../actions/index'; // veio do index.js da actions

class Login extends React.Component {
  constructor(props) {
    super(props); // começo deixando o estado com o email e a senha VAZIOS.
    this.state = {
      email: '',
      password: '',
      redireciona: false,
    };
    this.handleChange = this.handleChange.bind(this); // como não usei arron function, aí uso este bind pra função handleChange.
    this.submit = this.submit.bind(this); // usei bind aqui pelo mesmo motivo
  } // esses binds eu sempre faço logo depois desse this.state no início. Uso o bind pra cada função que eu criar(caso não use arrowFunction).
  // aí abaixo dos binds eu elaboro as funções. E chamo essas funções lá no html dentro dos inputs e botões.

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    }); // Essa é uma forma de atualizar o estado dos inputs.Quero atualizar o estado na medida que vou digitando nos dois inputs. O name e o value são duas propriedades no html dos inputs. Lembre desta forma de atualizar o state.
  }

  submit() {
    const { usuario } = this.props; // tenho que fazer esse props.
    const { email } = this.state; // vem do state.
    // tenho que fazer essas desestruturações porque uso as duas pra chamar a função usuario.
    usuario(email); // aqui tou chamando a função usuario que fiz lá embaixo no dispatch.

    this.setState({
      redireciona: true,
    }); // quando clicar no button e chamar a função submit, eu atualizo o estado
  }

  render() { // aqui irei validar o email como foi pedido no requisito 2.
    const { email, password, redireciona } = this.state; // tou trazendo do State. Faço isso daqui porque vou usar esses 3 agora abaixo pra validar as coisas.
    let emailValido = '';
    if (email.match(/((\w+)@(\w+)\.(\w+))/i)) { // é padrão isso aqui
      emailValido = true;
    }
    // aqui irei validar a senha como foi pedido no requisito 2.
    const criterioSenha = 5;
    let senhaValida = '';
    if (password.length > criterioSenha) {
      senhaValida = true; // se for comprimento maior que 5,é porque tá certo.
    }
    if (redireciona) {
      return <Redirect to="/carteira" />;
    } // se for redirecionar, aí faz esse redirect aí pra dar certo. Lembrando que pra redirecionar, o botão é clicado e aí chama a função submit e já atualiza o estado pra redireciona: true
    return (
      <form>
        <div>
          <input
            data-testid="email-input"
            type="email"
            name="email" // é bom botar o name porque fica melhor pra fazer o handleChange.
            placeholder="Digite seu email"
            className="email"
            onChange={ this.handleChange } // preciso botar isso aqui pra que ocorra a função ONCHANGE. Esse nome handleChange é nome padrão e genérico.
          />
        </div>
        <div>
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder=" Digite sua senha"
            className="password"
            onChange={ this.handleChange }
          />
        </div>

        <button
          type="button"
          className="firstButton"
          disabled={ emailValido === '' || senhaValida === '' }
          onClick={ () => this.submit() } // ao clicar, chamo a função submit
        >
          Entrar
        </button>
      </form>
    // esse disabled é fundamental. Ele recebe um booleano. Se for TRUE, esse button fica DESABILITADO. Pra habilitar, tem que ser false. Ou seja, pra habilitar, as variáveis emailValido e senhaValida não podem ser vazias. Aí sendo false e o botão habilitado, aí entra nos critérios que eu fiz um pouco acima pra ver se os dois inputs estão com os critérios certinhos.
    );
  }
}
Login.propTypes = {
  usuario: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  usuario: (email) => dispatch(action(email)), // esse usuario(nome que dei) é UMA FUNÇÃO, tanto que botei assim no propTypes. E o email nos parênteses vem do state.Eu irei chamar essa função DENTRO DA FUNÇÃO SUBMIT.
}); // tenho que botar essa função usuario(nome que eu dei) como props. Aí é legal fazer dentro da função de submit
// action foi o nome que dei pra action e exportei ela no index da pasta actions(meu segundo exporte lá). Esse nome email eu coloquei dentro de payload naquele arquivo.
// o mapDispatch serve pra despachar a action
export default connect(null, mapDispatchToProps)(Login); // boto null pq não usei o mapToState aqui. Aqui faço uma conexão

// Depois de ter feito isso aqui, aí agora devo ir no reducer. Neste caso, somente no user.js  O wallet.js não tem relação com o que os requisitos 2 e 3 pedem ainda.
