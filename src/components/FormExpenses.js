import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, saveExpense as saveExpenseAc } from '../actions/index';

class FormExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleInput(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    }, () => {
      console.log('state atualizado');
      console.log(this.state);
    });
  }

  inputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="value"
          value={ value }
          id="value"
          onChange={ this.handleInput }
        />
      </label>);
  }

  inputDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleInput }
        />
      </label>
    );
  }

  inputPaymentMethod() {
    const { paymentMethod } = this.state;
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select
          id="payment-method"
          name="paymentMethod"
          value={ paymentMethod }
          onChange={ this.handleInput }
        >
          <option>Dinheiro</option>
          <option selected>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="expense-category">
        Tag
        <select
          id="expense-category"
          name="tag"
          value={ tag }
          onChange={ this.handleInput }
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
    const { currencies, saveExpense } = this.props;
    const { currency } = this.state;
    return (
      <form>
        {this.inputValue()}
        <br />
        {this.inputDescription()}
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleInput }
          >
            {
              currencies.map((curr, index) => (
                <option key={ index }>{curr[0]}</option>
              ))
            }
          </select>
        </label>
        <br />
        { this.inputPaymentMethod() }
        <br />
        { this.inputTag() }

        <button
          type="button"
          onClick={ () => {
            this.setState((oldState) => ({
              id: oldState.id + 1,
            }),
            () => {
              saveExpense(this.state);
            });
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  saveExpense: (expense) => dispatch(saveExpenseAc(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
FormExpenses.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape().isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
