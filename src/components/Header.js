import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    if (expenses.length < 1) {
      return 0;
    }
    return expenses.reduce((acc, curr) => {
      const values = Object.values(curr.exchangeRates);
      const filterBRLT = values.filter((value) => value.codein !== 'BRLT');
      const filterCoin = filterBRLT.filter((value) => curr.currency === value.code);
      const finalCoin = filterCoin[0].ask;
      acc += Number(curr.value) * finalCoin;
      return (acc);
    }, 0);
  }

  render() {
    const { emailLogin } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ emailLogin }</span>
        <span data-testid="total-field">{ this.totalExpenses() }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  emailLogin: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
