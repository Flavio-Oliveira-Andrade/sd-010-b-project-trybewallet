import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  updateTotal(expenses) {
    const total = expenses.reduce((acc, curr) => {
      const rate = curr.exchangeRates[curr.currency].ask;
      return acc + curr.value * rate;
    }, 0);
    return total;
  }

  render() {
    const { login, expenses } = this.props;
    const currency = 'BRL';

    return (
      <header>
        <h4 data-testid="email-field">
          Email:
          { ' ' }
          { login }
        </h4>
        <p data-testid="total-field">
          { this.updateTotal(expenses) }
        </p>
        <p data-testid="header-currency-field">{ currency }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  login: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
