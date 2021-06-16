import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, fetchCurrency } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleValues = this.handleValues.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleClick() {
    const { addNewExpense, currencies, expenses, getCurrencies } = this.props;
    getCurrencies();
    this.setState({
      id: expenses.length || 0,
      exchangeRates: currencies,
    }, () => addNewExpense(this.state));
  }

  handleValues({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" name="value" type="text" onChange={ this.handleValues } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            name="description"
            type="text"
            onChange={ this.handleValues }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleValues }>
            {Object.keys(currencies).map((currency) => (
              <option key={ currency }>{currency}</option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" name="method" onChange={ this.handleValues }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.handleValues }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  addNewExpense: PropTypes.arrayOf(PropTypes.func).isRequired,
  getCurrencies: PropTypes.arrayOf(PropTypes.func).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrency()),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
