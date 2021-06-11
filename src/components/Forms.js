import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoins, addExpense } from '../actions/walletActions';
import Payments from './Payments';
import TagSelect from './TagSelect';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.currenciesName = this.currenciesName.bind(this);
    this.mountExpense = this.mountExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCoinsToState } = this.props;
    fetchCoinsToState();
  }

  deleteUDST(currenciesUSDT) {
    const currenciesWithoutUSDT = [...currenciesUSDT];
    currenciesWithoutUSDT.splice(1, 1);
    return currenciesWithoutUSDT;
  }

  currenciesName() {
    const { currencies } = this.props;
    const currenciesArray = Object.values(JSON.parse(currencies));
    const currenciesWithoutUSDT = this.deleteUDST(currenciesArray);
    return currenciesWithoutUSDT.map(({ code, index }) => (
      <option key={ index } value={ code }>{ code }</option>));
  }

  async mountExpense() {
    const { expenses } = this.props;
    const nextId = () => (expenses.length);
    const { fetchCoinsToState } = this.props;
    await fetchCoinsToState();
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const newExpense = {
      id: nextId(),
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: JSON.parse(currencies),
    };
    const { addExpenseToState } = this.props;
    addExpenseToState(newExpense);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="name"
            id="value"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="name"
            id="description"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select id="currencies" onChange={ (e) => this.handleChange(e) }>
            { this.currenciesName() }
          </select>
        </label>
        <Payments handleChange={ this.handleChange } />
        <TagSelect handleChange={ this.handleChange } />
        <button
          type="button"
          onClick={ () => this.mountExpense() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: JSON.stringify(state.wallet.currencies),
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsToState: () => dispatch(fetchCoins()),
  addExpenseToState: (expense) => dispatch(addExpense(expense)),
});

Forms.propTypes = {
  fetchCoinsToState: PropTypes.func.isRequired,
  addExpenseToState: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
