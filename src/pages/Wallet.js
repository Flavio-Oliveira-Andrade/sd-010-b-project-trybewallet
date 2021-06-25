import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, fetchCurrencies } from '../actions/walletAction';
import ExpenseTable from '../components/ExpenseTable';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const inicialState = {
  value: 0,
  description: '',
  currency: 'GBP',
  method: 'Cartão de crédito',
  tag: 'Lazer',
};

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = inicialState;

    this.handleChange = this.handleChange.bind(this);
    this.input = this.input.bind(this);
    this.select = this.select.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleChange({ target }) { // event desconstruction
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  input(name, type, value, label) {
    return (
      <label htmlFor={ name }>
        { `${label}: ` }
        <input
          id={ name }
          name={ name }
          onChange={ this.handleChange }
          type={ type }
          value={ value }
        />
      </label>
    );
  }

  select(name, value, label, options) {
    return (
      <label htmlFor={ name }>
        { `${label}: ` }
        <select
          id={ name }
          name={ name }
          onChange={ this.handleChange }
          value={ value }
        >
          { options.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          )) }
        </select>
      </label>);
  }

  saveExpense(event) {
    event.preventDefault();
    const { addExpenses } = this.props;
    addExpenses(this.state);
    this.setState({ ...inicialState });
  }

  updateTotal(expenses) {
    return expenses.reduce((acc, curr) => (
      acc + ((+curr.value) * curr.exchangeRates[curr.currency].ask)), 0); // +curr = parseFloat
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { emailUser, currencies, expenses } = this.props;
    // console.log(expenses);

    // const tot = expenses.reduce((acc, curr) => (
    //   acc + ((+curr.value) * curr.exchangeRates[curr.currency].ask) // +curr = parseFloat
    // ), 0);
    return (
      <div>
        <header>
          <p data-testid="email-field">{`User: ${emailUser}`}</p>
          <p data-testid="total-field">{`Total: ${this.updateTotal(expenses)}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form onSubmit={ this.saveExpense }>
          { this.input('value', 'number', value, 'Valor') }
          { this.input('description', 'text', description, 'Descrição') }
          { this.select('currency', currency, 'Moeda', currencies) }
          { this.select('method', method, 'Método de Pagamento', paymentMethods) }
          { this.select('tag', tag, 'Tag', tagOptions) }
          <button type="submit">Adicionar despesa</button>
        </form>
        <ExpenseTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
  addExpenses: (expense) => dispatch(addExpense(expense)),
});

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  total: state.wallet.total,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  // total: PropTypes.number,
  fetchCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// Wallet.defaultProps = {
//   total: 0,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
