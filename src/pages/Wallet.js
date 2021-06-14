import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import Header from './Header';

import { requisitionThunk,
  requisitionSalvaDespesasAction } from '../actions/index';

import '../App.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moedas: [],
      // despesas: [],
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      // exchangeRates: {},
    };

    this.atualizaMoedas = this.atualizaMoedas.bind(this);
    this.input = this.input.bind(this);
    // this.atualizaDespesas = this.atualizaDespesas.bind(this);
    this.salva = this.salva.bind(this);
    this.requisitionDespesas = this.requisitionDespesas.bind(this);
  }

  componentDidMount() {
    const { api } = this.props;
    api().then((response) => {
      // const { moeda } = this.props;
      // console.log(response);
      this.atualizaMoedas(response.api);
    });
  }

  input(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  atualizaMoedas(moedas) {
    this.setState({ moedas });
  }

  // atualizaDespesas(despesas) {
  //   this.setState({ despesas });
  // }

  async salva() {
    const { salvaDespesas } = this.props;
    // const api = await apiDespesas();
    const exchangeRates = await this.requisitionDespesas();
    console.log(exchangeRates);
    const {
      id,
      value,
      description,
      currency,
      method,
      tag } = this.state;
    // console.log(exchangeRates);
    // this.setState((valor) => ({ id: valor.id + 1 }));
    salvaDespesas({ id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates });
    this.setState((oldState) => ({
      id: oldState.id + 1,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    }));
    // console.log(objetoFinal);
    // salvaDespesas(objetoFinal);
    // this.requisitionDespesas();
  }

  async requisitionDespesas() {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultJson = await result.json();
    return resultJson;
  }

  renderTotal() {
    const { totalGlobal } = this.props;
    console.log(totalGlobal);
    const t = totalGlobal.reduce((acc, expense) => {
      const moeda = expense.currency;
      return acc + (Number(expense.value) * expense.exchangeRates[moeda].ask);
    }, 0);
    // console.log(t);
    return t;
  }

  renderHeader() {
    const { userEmail } = this.props;

    return (
      <header>
        <p data-testid="email-field">{userEmail}</p>
        <select data-testid="header-currency-field">
          <option defaultValue>BRL</option>
        </select>
        <p data-testid="total-field">
          Total:
          {' '}
          {this.renderTotal()}
        </p>
      </header>
    );
  }

  render() {
    const { moedas } = this.state;
    return (
      <section>
        {this.renderHeader()}
        <form>
          <label htmlFor="inputValor">
            Valor:
            <input onChange={ this.input } name="value" id="inputValor" />
          </label>
          <label htmlFor="inputDescricao">
            Descrição:
            <input onChange={ this.input } name="description" id="inputDescricao" />
          </label>
          <label htmlFor="input-moeda">
            Moedas:
            <select onChange={ this.input } name="currency" id="input-moeda">
              {moedas.filter((currency) => currency !== 'USDT')
                .map((money) => (<option key={ money }>{money}</option>))}
            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de Pagamento:
            <select onChange={ this.input } name="method" id="input-pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag
            <select onChange={ this.input } name="tag" id="input-tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button
          onClick={ () => this.salva() }
          type="button"
        >
          Adicionar despesa
        </button>
      </section>
    );
  }
}

Wallet.propTypes = {
  api: PropTypes.func.isRequired,
  // apiDespesas: PropTypes.func.isRequired,
  salvaDespesas: PropTypes.func.isRequired,
  totalGlobal: PropTypes.arrayOf().isRequired,
  userEmail: PropTypes.string.isRequired,
  // despesas: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  totalGlobal: state.wallet.expenses,
  userEmail: state.user.email,
  // moeda: state.wallet.currencies,
  // despesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  api: () => dispatch(requisitionThunk()),
  // apiDespesas: () => dispatch(requisitionThunkDespesas()),
  salvaDespesas: (salva) => dispatch(requisitionSalvaDespesasAction(salva)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
