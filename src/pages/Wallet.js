import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesForm from '../components/ExpensesForm';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  sumExpenses() {
    const { expenses } = this.props;

    if (expenses.length === 0) {
      return '0';
    }

    return expenses.reduce((sum, expense) => sum + expense);
  }

  render() {
    const { userEmail, currencies } = this.props;
    return (
      <section>
        <header>
          <p data-testid="email-field">
            Email:
            {' '}
            { userEmail }
          </p>
          <p data-testid="total-field">
            Despesa:
            {' '}
            { this.sumExpenses() }
          </p>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
        </header>
        <main>
          <ExpensesForm currencies={ currencies } />
        </main>
      </section>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses, currencies } }) => ({
  userEmail: email,
  expenses,
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
