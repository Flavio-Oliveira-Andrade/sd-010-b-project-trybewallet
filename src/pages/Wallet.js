import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultCurrency: 'BRL',
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      currenciesArray: [],
    };
    this.createExpenses = this.createExpenses.bind(this);
  }

  componentDidMount() {
    this.fetchApiFunction();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  fetchApiFunction() {
    const url = 'https://economia.awesomeapi.com.br/json/all';

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const currencies = Object.keys(response);
        this.setState({ currenciesArray: currencies });
      });
  }

  createValue() {
    const { value } = this.state;

    return (
      <label htmlFor="value">
        Valor
        <input
          onChange={ (e) => this.handleChange(e) }
          name="value"
          value={ value }
          id="value"
        />
      </label>
    );
  }

  createDescription() {
    const { description } = this.state;

    return (
      <label htmlFor="description">
        Descrição
        <input
          onChange={ (e) => this.handleChange(e) }
          name="description"
          value={ description }
          id="description"
        />
      </label>
    );
  }

  createCurrency() {
    const { currenciesArray } = this.state;
    const usdt = 'USDT';

    return (
      <label htmlFor="currency">
        Moeda
        <select
          onChange={ (e) => this.handleChange(e) }
          id="currency"
          role="combobox"
          name="currency"
        >
          {
            currenciesArray
              .filter((param) => param !== usdt)
              .map((curr) => <option key={ curr }>{curr}</option>)
          }
        </select>
      </label>
    );
  }

  createPaymentMethod() {
    const { method } = this.state;

    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          onChange={ (e) => this.handleChange(e) }
          id="method"
          role="combobox"
          name="method"
          value={ method }
        >
          <option>Selecione</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  createCategory() {
    const { tag } = this.state;

    return (
      <label htmlFor="tag">
        Tag
        <select
          onChange={ (e) => this.handleChange(e) }
          id="tag"
          role="combobox"
          name="tag"
          value={ tag }
        >
          <option>Selecione</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  createExpenses() {
    const { value, description, currency, method, tag } = this.state;
    const { walletToAction } = this.props;

    const expense = {
      // id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };

    walletToAction(expense);
  }

  render() {
    const { email } = this.props;
    const { value, defaultCurrency } = this.state;

    return (
      <>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <h2 data-testid="total-field">{ value }</h2>
          <h2 data-testid="header-currency-field">{ defaultCurrency }</h2>
        </header>
        <form>
          { this.createValue() }
          { this.createDescription() }
          { this.createCurrency() }
          { this.createPaymentMethod() }
          { this.createCategory() }
          <button
            onClick={ this.createExpenses }
            type="button"
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    walletToAction: (expense) => dispatch(walletAction(expense)),
  };
}

// Store (state) -> user // wallet
// user -> email
//  wallet -> expenses

// const mapStateToProps = ({ user: { email, password }, wallet: { expenses }}) => ({
//   email,
//   password,
//   expenses,
// })

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  walletToAction: PropTypes.func.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
