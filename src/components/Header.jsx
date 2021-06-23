import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, totalExpense } = this.props;
    let currentExpense = 0;
    if (totalExpense > 0) {
      currentExpense = totalExpense;
    }
    return (
      <header>
        <div>Wellcome to the TrybeWallet!</div>
        <p data-testid="email-field">
          Email:
          {userEmail}
        </p>
        <p data-testid="total-field">
          Despesa: R$
          {currentExpense}
        </p>
        <p data-testid="header-currency-field">BRL</p>

      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { totalExpense } }) => ({
  userEmail: email,
  totalExpense,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: propTypes.string,
}.isRequired;
