import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMoedas, saveExpenses } from '../actions/index.js';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getlistMoedas } = this.props;
    console.log('didmout');
    getlistMoedas();
  }

  handleClick(event) {
    event.preventDefault();
    const { getExpenseToStore } = this.props;
    getExpenseToStore(this.state);
    this.setState((state) => ({ id: state.id + 1 }));
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleTotal() {
    const { expenses } = this.props;
    return (!expenses ? 0 : expenses.reduce((accumulator, currentValue) => accumulator
      + parseFloat(currentValue.exchangeRates[currentValue
        .currency].ask * currentValue.value), 0));
  }

  render() {
    const { currency } = this.state;
    const { emailUser, currencies } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{ emailUser }</div>
          <div data-testid="total-field">{this.handleTotal()}</div>
          <div data-testid="header-currency-field">{currency}</div>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" onChange={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" onChange={ this.handleChange } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" onChange={ this.handleChange }>
              {currencies.map((moeda, index) => (<option key={ index }>{moeda}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
            <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
          </label>
        </form>
      </div>);
  }
}
const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getlistMoedas: () => dispatch(getMoedas()),
  getExpenseToStore: (state) => dispatch(saveExpenses(state)),
});

Wallet.propTypes = {
  emailUser: PropTypes.shape({
    email: PropTypes.string,
  }),
  getExpenseToStore: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
