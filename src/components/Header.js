import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    let total = 0;
    const { expenses } = this.props;

    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += exchangeRates[currency].ask * value;
    });

    return total;
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">
          { this.totalExpenses() }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
