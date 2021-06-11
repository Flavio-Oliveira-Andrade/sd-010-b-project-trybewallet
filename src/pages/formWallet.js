import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiMoeda } from '../actions';

class Formulario extends React.Component {
  componentDidMount() {
    const { fetchDispatch } = this.props; // veio do mapDispatch
    fetchDispatch(); // quando eu chamo essa função, eu chamo a API
  } // O requisito 7 pede: Ao entrar no /carteira, deve ser feita uma requisição pra API. Então tem que ter esse componentDidMount logo aqui.

  render() {
    const { currencies } = this.props; // chamo props aqui por causa do MapState. E vou usar aqui pra fazer um map na option da Moeda. Farei um Map e currencies é um Array. ATENÇÃO no map que eu fiz. Veja que é diferente do Resto do formulário. Quando uso o currencies ali, eu estou acessando as currencies na API.
    console.log(currencies);
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              type="text"
              name="value"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              name="description"
            />
          </label>
          <label htmlFor="currencies">
            Moeda
            <select id="currencies" name="currencies">
              {currencies.map((bt) => <option value={ bt } key={ bt }>{ bt }</option>)}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment" name="payment">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option value="comida">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="tranporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </section>
    ); // ATENÇÃO no map que eu fiz. Ele que faz aquele select aparecer diversas moedas de uma forma dinâmica, algo bem interessante.
  }
}
Formulario.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
  fetchDispatch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
}); // veja lá no index do reducers que currencies É UM ARRAY. Vou botar ela como props lá pra cima, e logo aqui em cima colocarei arrayOf no Proptypes
const mapDispatchToProps = (dispatch) => ({
  fetchDispatch: () => dispatch(fetchApiMoeda()), // esse com chamada de API fica um pouco diferente do outro que fiz no Login.js. Não coloquei nada nos ().
}); // esse fetchDispatch(nome que inventei) é uma função. Vou botar ela como função lá pra cima, e aqui logo em cima no Proptypes colocarei como func
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
