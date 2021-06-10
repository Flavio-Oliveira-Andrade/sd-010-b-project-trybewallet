import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrency from '../services/fetchCurrency';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.setCurrencyOnState = this.setCurrencyOnState.bind(this);
    this.returnCurrencies = this.returnCurrencies.bind(this);
    this.state = { currencies: {} };
  }

  async componentDidMount() {
    const currencies = await fetchCurrency();
    this.setCurrencyOnState(currencies);
  }

  setCurrencyOnState(currencies) {
    this.setState({ currencies });
  }

  returnCurrencies(currencies) {
    console.log(Object.keys(currencies));
    if (Object.keys(currencies) === 0) {
      return (<option value="loading">Carregando...</option>);
    }
    return Object.keys(currencies).filter((currency) => currency !== 'USDT')
      .map((currency) => (
        <option key={ currency } value={ currency }>
          { currency }
        </option>));
  }

  calculateTotal() {
    const { userExpenses } = this.props;
    const values = userExpenses.map((expense) => expense.value);
    const total = values.reduce((acc, curr) => acc + curr, 0);
    if (!total) return 0;
    return total;
  }

  rerturnOi() {
    return <option>Oi</option>;
  }

  render() {
    const { userEmail } = this.props;
    const total = this.calculateTotal();
    const { currencies } = this.state;
    return (
      <div>
        <header>
          <section data-testid="email-field">{userEmail}</section>
          <section data-testid="total-field">{`Total: ${total}`}</section>
          <section data-testid="header-currency-field">Moeda atual: BRL</section>
        </header>
        <form>
          <label htmlFor="expense-value">
            Valor:
            <input type="number" id="expense-value" name="expenseValue" />
          </label>
          <label htmlFor="expense-description">
            Descrição:
            <input type="text" id="expense-description" name="expenseDescription" />
          </label>
          <label htmlFor="expense-currency">
            Moeda
            <select id="expense-currency">
              {this.returnCurrencies(currencies)}
            </select>
          </label>
          <label htmlFor="expense-payment-method">
            Método de Pagamento
            <select id="expense-payment-method">
              <option value="cash">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="expense-tag">
            Tag
            <select name="expenseTag" id="expense-tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
