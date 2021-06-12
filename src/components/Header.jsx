import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleTotalExpenses = this.handleTotalExpenses.bind(this);
  }

  handleTotalExpenses() {
    const { totalExpenses } = this.props;
    return totalExpenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      acc += value * exchangeRates[currency].ask;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          Despesa Total :  R$
          {+this.handleTotalExpenses().toFixed(2)}
          {' '}

        </p>
        <p data-testid="header-currency-field">BRL</p>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
