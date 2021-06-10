import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrency from '../services/api/currencyApi';
import { fetchExpense, finishEditing, stopEditing } from '../actions';
import Header from '../components/Header';
import Table from '../components/Table';

const currencyArr = [
  'USD', 'CAD', 'EUR',
  'GBP', 'ARS', 'BTC',
  'LTC', 'JPY', 'CHF',
  'AUD', 'CNY', 'ILS',
  'ETH', 'XRP'];

const INITIAL_INPUT_VALUE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      ...INITIAL_INPUT_VALUE,
      editingState: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const allCurrencies = await getCurrency();
    const filteredCurrencies = Object.keys(allCurrencies)
      .filter((currency) => currencyArr.includes(currency));
    this.updateCurrency(filteredCurrencies);
  }

  componentDidUpdate() {
    const { edit: { editing } } = this.props;
    if (editing) {
      this.updateStateToEdit();
    }
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { editingState } = this.state;
    const { addExpense, editExpense } = this.props;
    if (!editingState) {
      addExpense(this.state);
      this.setState((prevState) => ({ ...prevState, ...INITIAL_INPUT_VALUE }));
    } else {
      const expense = this.findExpense();
      const { value, description, currency, method, tag } = this.state;
      const newExpense = { ...expense, value, description, currency, method, tag };
      editExpense(newExpense);
      this.setState((prevState) => ({ ...prevState,
        ...INITIAL_INPUT_VALUE,
        editingState: false }));
    }
  }

  findExpense() {
    const { edit: { id: idToEdit }, expenses } = this.props;
    return expenses.find(({ id }) => id === idToEdit);
  }

  updateCurrency(currencies) {
    this.setState({ currencies });
  }

  updateStateToEdit() {
    const { stopEdit } = this.props;
    const { value, description, currency, method, tag } = this.findExpense();
    const newValues = { value, description, currency, method, tag, editingState: true };
    this.setState((prevState) => ({ ...prevState, ...newValues }), () => stopEdit());
  }

  renderCurrenciesAsOption() {
    const { currencies, currency } = this.state;
    const allCurrencies = currencies
      .map((c) => <option key={ c } value={ c }>{c}</option>);
    return (
      <label htmlFor="currency">
        Moeda
        <select
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          name="currency"
          id="currency"
          value={ currency }
        >
          {allCurrencies}
        </select>
      </label>
    );
  }

  renderPaymentOptions() {
    const { method } = this.state;
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          name="method"
          value={ method }
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          id="payment"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagOptions() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          value={ tag }
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          id="tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { value: priceValue, description } = this.state;
    return (
      <>
        <Header />
        <form>
          <label htmlFor="value">
            Valor:
            <input
              id="value"
              type="number"
              name="value"
              value={ priceValue }
              onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              id="description"
              type="text"
              name="description"
              value={ description }
              onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
            />
          </label>
          {this.renderCurrenciesAsOption()}
          {this.renderPaymentOptions()}
          {this.renderTagOptions()}
          <button type="button" onClick={ this.handleSubmit }>
            Adicionar despesa
          </button>
        </form>
        <Table />
      </>);
  }
}
Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  stopEdit: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })),
  edit: PropTypes.shape({
    editing: PropTypes.bool,
    id: PropTypes.number,
  }),
};
Wallet.defaultProps = {
  expenses: {
    id: 1,
    value: '555',
    description: 'faltou',
    currency: 'faltou',
    method: 'faltou',
    tag: 'faltou',
  },
  edit: { editing: false, id: null },
};
const mapStateToProps = ({ user, wallet }) => ({
  expenses: wallet.expenses,
  edit: wallet.edit,
  email: user.email,
});
const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(fetchExpense(state)),
  stopEdit: () => dispatch(stopEditing()),
  editExpense: (expense) => dispatch(finishEditing(expense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
