import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  handleExpensesSum() {
    const { expenses } = this.props;
    return expenses.reduce((total, element) => {
      const { value, currency, exchangeRates } = element;
      const exchange = +exchangeRates[currency].ask;
      const valueSum = +value * exchange;
      total += +valueSum.toFixed(2);
      return total;
    }, 0);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <nav className="nav-header">
          <header className="header">
            <p data-testid="email-field">{email}</p>
            <p data-testid="total-field">
              {expenses.length ? this.handleExpensesSum() : 0.00 }
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </header>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, null)(Header);
