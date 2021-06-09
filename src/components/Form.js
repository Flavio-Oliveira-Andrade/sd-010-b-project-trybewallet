import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import addExpenseAction from '../actions/addExpense';

const intitialState = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = intitialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, addExpense } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input name="value" onChange={ this.handleChange } type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <input name="description" onChange={ this.handleChange } type="text" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select onChange={ this.handleChange } name="currency">
            {currencies
              .map((moeda) => (moeda !== 'USDT' ? <option>{moeda}</option> : null))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ this.handleChange } name="method">
            <option name="method">Dinheiro</option>
            <option name="method">Cartão de crédito</option>
            <option name="method">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select onChange={ this.handleChange } name="tag">
            <option name="tag">Alimentação</option>
            <option name="tag">Lazer</option>
            <option name="tag">Trabalho</option>
            <option name="tag">Transporte</option>
            <option name="tag">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => addExpense(this.state) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.string.isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (stateData) => dispatch(addExpenseAction(stateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
