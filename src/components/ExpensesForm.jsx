import './ExpensesForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchCurrencies, fetchCurrenciesPart2 } from '../actions/index';
// import fetchCurrency from './'

class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.addButton = this.addButton.bind(this);
  }

  componentDidMount() {
    const { startCurrencies } = this.props;
    startCurrencies();
  }

  addButton(e) {
    const { setExchangeRates } = this.props;
    const { count } = this.state;
    e.preventDefault();
    const { value } = document.getElementById('valor-input');
    const description = document.getElementById('descricao-input').value;
    const currency = document.getElementById('moeda-input').value;
    const method = document.getElementById('metodoPagamento-input').value;
    const tag = document.getElementById('categoria-input').value;

    setExchangeRates({
      id: count,
      value,
      description,
      currency,
      method,
      tag,
    });
    this.setState({ count: count + 1 });
  }

  render() {
    const { currencies } = this.props;
    return (
      <fieldset>
        <label htmlFor="valor-input">
          <strong>Valor </strong>
          <input id="valor-input" type="number" name="valor" />
        </label>
        <label htmlFor="descricao-input">
          <strong>Descrição </strong>
          <input id="descricao-input" type="text" name="descricao" />
        </label>
        <label htmlFor="moeda-input">
          <strong>Moeda </strong>
          <select id="moeda-input">
            {/* {console.log(currencies)} */}
            {
              currencies.filter((currency) => currency !== 'USDT')
                .map((cur) => <option key={ cur } value={ cur }>{cur}</option>)
            }
          </select>
        </label>
        <label htmlFor="metodoPagamento-input">
          <strong>Método de pagamento </strong>
          <select id="metodoPagamento-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria-input">
          <strong>Tag </strong>
          <select id="categoria-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="submit"
          id="expenseButton"
          onClick={ this.addButton }
        >
          Adicionar despesa
        </button>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  startCurrencies: () => dispatch(fetchCurrencies()),
  // addExpense: (data) => dispatch(setExpense(data)),
  setExchangeRates: (data) => dispatch(fetchCurrenciesPart2(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = PropTypes.func.isRequired;
