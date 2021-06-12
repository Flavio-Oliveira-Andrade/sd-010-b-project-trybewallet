import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import Header from './Header';

import { requisitionThunk,
  requisitionThunkDespesas, requisitionSalvaDespesasAction } from '../actions/index';

import '../App.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moedas: [],
      // despesas: [],
      id: 0,
      value: '10',
      description: 'Dez dólares',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
    };

    this.atualizaMoedas = this.atualizaMoedas.bind(this);
    this.input = this.input.bind(this);
    // this.atualizaDespesas = this.atualizaDespesas.bind(this);
    this.salva = this.salva.bind(this);
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
    const { salvaDespesas, apiDespesas } = this.props;
    const api = await apiDespesas();
    const {
      id,
      value,
      description,
      currency,
      method,
      tag } = this.state;
    // console.log(id);
    const objetoFinal = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: api.despesas,
    };
      // console.log(objetoFinal);
    this.setState((valor) => ({ id: valor.id + 1 }));
    salvaDespesas(objetoFinal);
  }

  renderTotal() {
    const { totalGlobal } = this.props;
    // console.log(totalGlobal);
    const t = totalGlobal.reduce((acc, expense) => {
      acc += parseFloat(expense.value);
      return acc;
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
        <p data-testid="total-field">{this.renderTotal()}</p>
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
              <option value="Cartão-de-credito">Cartão de crédito</option>
              <option value="Cartão-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-debito">
            Tag
            <select onChange={ this.input } name="tag" id="input-debito">
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
  apiDespesas: PropTypes.func.isRequired,
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
  apiDespesas: () => dispatch(requisitionThunkDespesas()),
  salvaDespesas: (salva) => dispatch(requisitionSalvaDespesasAction(salva)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
