import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies as fetchCurrenciesThunk, saveExpense } from '../actions';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currencies: [],
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies, expenses } = this.props;
    fetchCurrencies();
    console.log(expenses);
    // if (expenses.length === 1) {
    //   fetchCurrencies();
    //   console.log('ENTREI NO IF');
    // }
  }

  componentDidUpdate() {
    const { fetchCurrencies, expenses } = this.props;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  addExpense() {
    const { fetchCurrencies, currencies, expenses, saveNewExpanse } = this.props;
    fetchCurrencies();
    console.log('CHAMEI A API');
    this.setState({
      id: expenses.length || 0,
      exchangeRates: currencies,
    }, () => saveNewExpanse(this.state));
  }

  renderForms() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input onChange={ this.handleChange } name="value" type="text" id="value" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input
            onChange={ this.handleChange }
            name="description"
            type="text"
            id="desc"
          />
        </label>
        { this.renderCurrencies(currencies) }
        <label htmlFor="pay">
          Método de pagamento
          <select onChange={ this.handleChange } name="method" id="pay">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleChange } name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button onClick={ this.addExpense } type="button">
          Adicionar despesa
        </button>
      </form>
    );
  }

  renderCurrencies(currencies) {
    return (
      <label htmlFor="moeda">
        Moeda
        <select onChange={ this.handleChange } name="currency" id="moeda">
          { Object.keys(currencies).map((curr) => {
            if (curr !== 'USDT') {
              return (<option key={ curr } value={ curr }>{curr}</option>);
            }
            return console.log('Aqui está o return, Sr. Lint.');
          }) }
        </select>
      </label>
    );
  }

  renderLoading() {
    return (
      <p>Carregando...</p>
    );
  }

  render() {
    const { isFetching, expenses, fetchCurrencies } = this.props;
    // console.log(isFetching);
    if (isFetching === true) return this.renderLoading();
    // console.log(this.renderForms());
    return this.renderForms();
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesThunk()),
  saveNewExpanse: (expanse) => dispatch(saveExpense(expanse)),
});

Forms.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
  saveNewExpanse: PropTypes.arrayOf(PropTypes.func).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
