import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAPIExpenseAction } from '../actions';
import ExpensesButton from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { newExpense, expenses } = this.props;
    const expensesLength = expenses.length;

    newExpense(this.state);

    if (expensesLength >= 0) {
      this.setState({ id: expensesLength + 1 });
    }
  }

  render() {
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="i">
          Descrição
          <input type="text" id="i" name="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency" onChange={ this.handleChange }>
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <ExpensesButton handler={ this.handleClick } />
      </form>
    );
  }
}

Form.propTypes = {
  newExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (expense) => dispatch(fetchAPIExpenseAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
