import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewExpense, requestMoedasApi } from '../actions';
import getApi from '../services/requestApi';

class WalletForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.createInputValor = this.createInputValor.bind(this);
    this.createInputDescricao = this.createInputDescricao.bind(this);
    this.createSelectMoeda = this.createSelectMoeda.bind(this);
    this.createSelectPagamento = this.createSelectPagamento.bind(this);
    this.createSelectTag = this.createSelectTag.bind(this);
  }

  async componentDidMount() {
    const { updateMoedas } = this.props;
    await updateMoedas(getApi());
  }

  handleClick() {
    const { addExpenses, expenses } = this.props;
    getApi().then((result) => {
      this.setState({ id: expenses.length, exchangeRates: result });
      addExpenses(this.state);
    });
  }

  createInputValor() {
    return (
      <label htmlFor="input-valor">
        Valor
        <input
          id="input-valor"
          type="text"
          name="value"
          onChange={ ({ target }) => this.setState({ [target.name]: target.value }) }
        />
      </label>);
  }

  createInputDescricao() {
    return (
      <label htmlFor="input-descricao">
        Descrição
        <input
          id="input-descricao"
          type="text"
          name="description"
          onChange={ ({ target }) => this.setState({ [target.name]: target.value }) }
        />
      </label>
    );
  }

  createSelectMoeda() {
    const { currencies } = this.props;
    return (
      <label htmlFor="select-moeda">
        Moeda
        <select
          id="select-moeda"
          name="currency"
          onChange={ ({ target }) => this.setState({ [target.name]: target.value }) }
        >
          {Object.keys(currencies)
            .map((currency) => (currency !== 'USDT'
              ? <option key={ currency }>{currency}</option> : null))}
        </select>
      </label>
    );
  }

  createSelectPagamento() {
    return (
      <label htmlFor="select-pagamento">
        Método de pagamento
        <select
          id="select-pagamento"
          name="method"
          onChange={ ({ target }) => this.setState({ [target.name]: target.value }) }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  createSelectTag() {
    return (
      <label htmlFor="select-categoria">
        Tag
        <select
          id="select-categoria"
          name="tag"
          onChange={ ({ target }) => this.setState({ [target.name]: target.value }) }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.createInputValor() }
        { this.createInputDescricao() }
        { this.createSelectMoeda() }
        { this.createSelectPagamento() }
        { this.createSelectTag() }

        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,

});
const mapDispatchToProps = (dispatch) => ({
  updateMoedas: (currencies) => dispatch(requestMoedasApi(currencies)),
  addExpenses: (expense) => dispatch(addNewExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForms);

WalletForms.propTypes = {
  updateMoedas: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
WalletForms.defaultProps = {
  currencies: [],
};
