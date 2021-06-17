// O requisito 8 eu tive a imensa ajuda do meu colega Alexandre Damasceno. Link do PR dele: https://github.com/tryber/sd-010-b-project-trybewallet/pull/45/files
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiMoeda, fetchAllcoins, addGastos } from '../actions';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: {},
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.selectMethodFunction = this.selectMethodFunction.bind(this);
  }

  componentDidMount() {
    const { fetchDispatch } = this.props; // veio do mapDispatch
    fetchDispatch(); // quando eu chamo essa função, eu chamo a API
  } // O requisito 7 pede: Ao entrar no /carteira, deve ser feita uma requisição pra API. Então tem que ter esse componentDidMount logo aqui.

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleOnClick() {
    const { fetchCoins, gastoAction, gastosAtuaisArray } = this.props;
    fetchCoins().then((expenses) => this.setState({
      exchangeRates: expenses,
      id: gastosAtuaisArray.length,
    })).then(() => gastoAction(this.state));
  }
  // fetchAPIExpenses().then((expenses) => this.setState({
  //   id: expensesArr.length,
  //   exchangeRates: expenses,
  // })).then(() => actionAddState(this.state));

  selectMethodFunction() {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" name="method" onChange={ this.handleOnChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props; // chamo props aqui por causa do MapState. E vou usar aqui pra fazer um map na option da Moeda. Farei um Map e currencies é um Array. ATENÇÃO no map que eu fiz. Veja que é diferente do Resto do formulário. Quando uso o currencies ali, eu estou acessando as currencies na API.
    return (
      <section>
        <form onSubmit={ (event) => event.preventDefault() }>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              type="text"
              name="value"
              onChange={ this.handleOnChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              name="description"
              onChange={ this.handleOnChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency" onChange={ this.handleOnChange }>
              {currencies.map((bt) => <option value={ bt } key={ bt }>{ bt }</option>)}
            </select>
          </label>
          { this.selectMethodFunction() }
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag" onChange={ this.handleOnChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Tranporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="submit"
            onClick={ this.handleOnClick }
          >
            Adicionar despesa
          </button>
        </form>
      </section>
    ); // ATENÇÃO no map que eu fiz. Ele que faz aquele select aparecer diversas moedas de uma forma dinâmica, algo bem interessante.
  }
}
Formulario.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
  fetchDispatch: PropTypes.func.isRequired,
  gastosAtuaisArray: PropTypes.func.isRequired,
  fetchCoins: PropTypes.func.isRequired,
  gastoAction: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  gastosAtuaisArray: state.wallet.expenses,
}); // veja lá no index do reducers que currencies É UM ARRAY. Vou botar ela como props lá pra cima, e logo aqui em cima colocarei arrayOf no Proptypes
const mapDispatchToProps = (dispatch) => ({
  fetchDispatch: () => dispatch(fetchApiMoeda()), // esse com chamada de API fica um pouco diferente do outro que fiz no Login.js. Não coloquei nada nos ().
  fetchCoins: () => dispatch(fetchAllcoins()),
  gastoAction: (gasto) => dispatch(addGastos(gasto)),
}); // esse fetchDispatch(nome que inventei) é uma função. Vou botar ela como função lá pra cima, e aqui logo em cima no Proptypes colocarei como func
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
