import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../style/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    const sum = expenses.reduce(
      (acc, curr) => acc + (curr.exchangeRates[curr.currency].ask * curr.value),
      0,
    );
    return parseFloat(sum).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header className="header-container">
        <p className="paragraph-email" data-testid="email-field">
          { email }
        </p>
        <span data-testid="total-field">
          R$
          {' '}
          <strong>
            { this.sumExpenses() }
          </strong>
        </span>
        <p className="currency-convert" data-testid="header-currency-field">
          Moeda de conversão:
          {' '}
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};
