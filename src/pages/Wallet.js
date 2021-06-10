import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../components/Input';
import { fetchCurrency as fetchCurrencyThunk, addExpense } from '../actions';
import { SelectPagamento } from '../components/SelectPagamento';
import { SelectTag } from '../components/SelectTag';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descrição: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { emailUser, currencyM } = this.props;
    const { addExpenses } = this.props;
    return (
      <>
        <header>
          <h1 data-testid="email-field">
            {emailUser}
          </h1>
          <p data-testid="total-field">
            0
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </header>
        <form>
          <Input type="text" name="valor" onChange={ this.handleChange } />
          <Input type="text" name="descrição" onChange={ this.handleChange } />
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda" onChange={ this.handleChange }>
              {Object.keys(currencyM)
                .map((element, index) => (
                  <option
                    key={ index }
                  >
                    {element}
                  </option>
                ))}
            </select>
          </label>
          <SelectPagamento onChange={ this.handleChange } />
          <SelectTag onChange={ this.handleChange } />
          <button
            type="button"
            onClick={ () => { addExpenses(this.state); } }
          >
            Adicionar Despesa
          </button>
        </form>
        <Table />
      </>
    );
  }
}

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  currencyM: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  currencyM: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyThunk()),
  addExpenses: (state) => dispatch(addExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
