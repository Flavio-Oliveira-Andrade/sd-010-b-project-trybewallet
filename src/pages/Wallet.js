import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenseThunk } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.state = {
      currencies: [],
      expense: {
        id: -1,
        value: '',
        description: '',
        currency: 'USD',
        payment: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  onChangeHandle({ target }) {
    const countExpenses = 1;
    this.setState((prev) => ({
      expense: {
        ...prev.expense,
        id: prev.expense.id + countExpenses,
        [target.id]: target.value,
      },
    }));
  }

  getCurrencies() {
    const { currencies } = this.state;
    return currencies.map((currency) => {
      if (currency !== 'USDT') {
        return <option key={ currency }>{ currency }</option>;
      }
      return null;
    });
  }

  calculateTotal() {
    const { expenses } = this.props;
    if (expenses || expenses.length > 0) {
      const total = expenses.reduce((acc, curr) => {
        acc += parseFloat(curr.value.replace(',', '.'));
        return acc;
      }, 0);
      return total.toFixed(2);
    }
    return 0;
  }

  fetchCurrencies() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => {
        const currencies = Object.keys(response);
        this.setState({
          currencies,
        });
      });
  }

  renderHeadingInputs(name, value, id) {
    return (
      <div>
        <span>
          { name }
          :
        </span>
        <span
          data-testid={ id }
        >
          { value }
        </span>
      </div>
    );
  }

  renderWalletForms(name, value) {
    return (
      <label htmlFor={ name }>
        { value }
        <input
          type="text"
          id={ name }
          className={ `input-${name}` }
          name={ name }
          onChange={ (e) => this.onChangeHandle(e) }
        />
      </label>
    );
  }

  render() {
    const { email, addExpense } = this.props;
    const { expense } = this.state;
    const total = this.calculateTotal();
    return (
      <div>
        <header className="wallet-header">
          { this.renderHeadingInputs('Email', email, 'email-field')}
          { this.renderHeadingInputs('Total', `R$ ${total}`, 'total-field')}
          { this.renderHeadingInputs('Câmbio', 'BRL', 'header-currency-field')}
        </header>
        <h1 className="wallet-title">TrybeWallet</h1>
        <form className="wallet-form">
          { this.renderWalletForms('value', 'Valor') }
          { this.renderWalletForms('description', 'Descrição') }
          <label htmlFor="currency">
            Moeda
            <select id="currency" onChange={ (e) => this.onChangeHandle(e) }>
              { this.getCurrencies() }
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento
            <select id="payment" onChange={ (e) => this.onChangeHandle(e) }>
              <option name="Dinheiro">Dinheiro</option>
              <option name="Cartão de crédito">Cartão de crédito</option>
              <option name="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag" name="tag">
            Categoria
            <select id="tag" onChange={ (e) => this.onChangeHandle(e) }>
              <option name="Alimentação">Alimentação</option>
              <option name="Lazer">Lazer</option>
              <option name="Trabalho">Trabalho</option>
              <option name="Transporte">Transporte</option>
              <option name="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ () => addExpense(expense) }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(addExpenseThunk(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
