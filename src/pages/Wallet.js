import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;

    if (expenses.length === 0) {
      return '0';
    }

    return expenses.reduce((sum, expense) => sum + expense);
  }

  render() {
    const { userEmail } = this.props;
    return (
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
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  userEmail: email,
  expenses,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
