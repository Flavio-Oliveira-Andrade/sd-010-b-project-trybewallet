import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GiWallet } from 'react-icons/gi';

class Header extends Component {
  render() {
    const { userEmail, amount } = this.props;

    return (
      <header>
        <section className="main-title">
          <section className="logo-icon">
            {' '}
            <GiWallet />
          </section>
          <section className="main-title-container">

            <h1>Welcome to your expense wallet</h1>
            <h4>Your financial independence starts here</h4>
          </section>
        </section>

        <p data-testid="email-field">
          Email:
          {' '}
          {userEmail}
        </p>

        <section className="expense-info">
          <p data-testid="total-field">
            Despesa: R$
            {parseFloat(amount).toFixed(2)}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
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
