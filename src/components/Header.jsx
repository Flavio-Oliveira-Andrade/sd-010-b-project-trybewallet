import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, amount } = this.props;

    return (
      <header>
        <p data-testid="email-field">
          Email:
          {' '}
          {userEmail}
        </p>
        <p data-testid="total-field">
          Despesa: R$
          {parseFloat(amount).toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  amount: state.wallet.amount,
});

Header.propTypes = {
  userEmail: PropTypes.string,
  expenses: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps)(Header);
