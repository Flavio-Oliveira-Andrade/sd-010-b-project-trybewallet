import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.updateAmount = this.updateAmount.bind(this);
  }

  updateAmount() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      acc += value * exchangeRates[currency].ask;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div className="wallet-container">
        <div className="wallet-header">
          <p data-testid="email-field">{`Email: ${email} `}</p>
          <p data-testid="total-field">{ parseFloat(this.updateAmount()).toFixed(2) }</p>
          <select data-testid="header-currency-field">
            <option>BRL</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps)(Header);
